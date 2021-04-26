<template>
  <div class="PlantsShow">
    <h1>{{ plant.common_name }}</h1>
    <h4> {{ plant.scientific_name }} </h4>
    <button v-on:click="showPlant(plant)" v-if="isLoggedIn()">Add to my Garden</button>
    <hr width="20%">
    <h3> Growth Needs </h3>
    <p>Shade Tolerance: {{ plant.shade_tolerance }} </p>
    <p>Drought Tolerance: {{ plant.drought_tolerance }} </p>
    <p>Moisture Needs: {{ plant.moisture_needs }} </p>
    <p>Maximum Tolerable Precipitation (inches): {{ plant.max_precip }} </p>
    <hr width="20%">
    <h3> Soil Needs </h3>
    <p>Root Depth (inches): {{ plant.root_depth }} </p>
    <p>Adapted to Course Soil: {{ plant.coarse_soil }} </p>
    <p>Adapted to Medium Soil: {{ plant.medium_soil }} </p>
    <p>Adapted to Fine Soil: {{ plant.fine_soil }} </p>
    <p>Salinity Tolerance: {{ plant.salinity_tolerance }} </p>
    <hr width="20%">
    <h3> Timing </h3>
    <p>Growth Period: {{ plant.growth_period }} </p>
    <p>Blooming Period: {{ plant.bloom_period }} </p>
    <p>Duration: {{ plant.duration }} </p>
    <p>Height at Maturity (ft): {{ plant.mature_height }} </p>
    <p>Lifespan: {{ plant.lifespan }} </p>
    <hr width="20%">
    <h3> Langiappe </h3>
    <p>Flower? {{ plant.flower_conspicuous }} </p>
    <p>Flower Color: {{ plant.flower_color }} </p>
    <p>Fruit? {{ plant.fruit_conspicuous }} </p>
    <p>Toxicity? {{ plant.toxicity }} </p>
    <hr width="50%">
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
  </div>
</template>

<style>
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