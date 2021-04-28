<template>
  <div class="PlantsShow">
    <div id="wrapper">
			<div id="main">
        <section id="content" class="main" style="text-align:center;">

    <h1>{{ plant.common_name }}</h1>
    <h4> {{ plant.scientific_name }} </h4>
    <button v-on:click="showPlant(plant)" v-if="isLoggedIn()">Add to my Garden</button>
    <hr class="style-four">
    <div class="row" style="text-align:center;">
		<div class="col-6 col-12-medium">											
      <h3> Growth Needs </h3>
      <li><b>Shade Tolerance:</b> {{ plant.shade_tolerance }} </li>
      <li>Drought Tolerance: {{ plant.drought_tolerance }} </li>
      <li>Moisture Needs: {{ plant.moisture_needs }} </li>
      <li>Maximum Tolerable Precipitation (inches): {{ plant.max_precip }} </li>

      <hr width="70%">
      <h3> Soil Needs </h3>
      <li>Root Depth (inches): {{ plant.root_depth }} </li>
      <li>Adapted to Course Soil: {{ plant.coarse_soil }} </li>
      <li>Adapted to Medium Soil: {{ plant.medium_soil }} </li>
      <li>Adapted to Fine Soil: {{ plant.fine_soil }} </li>
      <li>Salinity Tolerance: {{ plant.salinity_tolerance }} </li>
    <hr width="70%">
    <h3> Timing </h3>
    <li>Growth Period: {{ plant.growth_period }} </li>
    <li>Blooming Period: {{ plant.bloom_period }} </li>
    <li>Duration: {{ plant.duration }} </li>
    <li>Height at Maturity (ft): {{ plant.mature_height }} </li>
    <li>Lifespan: {{ plant.lifespan }} </li>
    <hr width="70%">
    <h3> Langiappe </h3>
    <li>Flower? {{ plant.flower_conspicuous }} </li>
    <li>Flower Color: {{ plant.flower_color }} </li>
    <li>Fruit? {{ plant.fruit_conspicuous }} </li>
    <li>Toxicity? {{ plant.toxicity }} </li>
    </div>
    </div>
    <hr width="70%">
    <router-link to="/plants">Browse All</router-link> | <router-link to="/search">Search</router-link>

    <dialog id="plant-details">
      <form>
        <h2>{{ plant.common_name }}</h2>
        <v-select :options="['want to plant', 'planted']" v-model="gardenStatus"/>
        <br>
        <button v-on:click="createGarden()">Add to Garden</button> 
        <br><br>
        <button>Close</button>
      </form>
    </dialog>
    
     </section>
		</div>
    </div>
  </div>
</template>

<style>
hr.style-four {
  height: 12px;
  border: 0;
  box-shadow: inset 0 12px 12px -12px #eec6eb;
}
hr.style-three {
  border: 0;
  border-bottom: 1px dashed #ccc;
  background: #999;
  align-items: center;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the show",
      plant: [],
      gardenStatus: "",
    };
  },
  created: function () {
    axios.get("/api/plants/" + this.$route.params.id).then((response) => {
      console.log(response.data);
      this.plant = response.data;
    });
  },
  methods: {
    isLoggedIn: function () {
      console.log("logged in");
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    showPlant: function (plant) {
      this.currentPlant = plant;
      document.querySelector("#plant-details").showModal();
    },
    createGarden: function () {
      var params = {
        plant_id: this.plant.id,
        status: this.gardenStatus,
      };
      axios.post("/api/gardens", params).then((response) => {
        console.log("adding to garden...", response.data);
      });
    },
  },
};
</script>