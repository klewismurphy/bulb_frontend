<template>
  <div class="PlantsShow">
    <div id="wrapper">
			<div id="main">
        <section id="content" class="main" style="text-align:center;">

    <h1>{{ plant.common_name }}</h1>
    <h3> {{ plant.scientific_name }} </h3>
    <br>
    <button class="button large" v-on:click="showPlant(plant)" v-if="isLoggedIn()">Add to my Garden</button><br><br>
    <a href="/glossary" class="button">What do these terms mean?</a>
    <hr class="style-four">
    <div class="row">
		<div class="col-6 col-12">										
      <ul class="showlist">
      <h3> Locale </h3>
      <li><b><a href="/whynative">Found in:</a></b> {{plant.state}}</li>
      <hr width="70%">
      <h3> Growth Needs </h3>
      <li><b>Shade Tolerance:</b> {{ plant.shade_tolerance }} </li>
      <li><b>Drought Tolerance:</b> {{ plant.drought_tolerance }} </li>
      <li><b>Moisture Needs:</b> {{ plant.moisture_needs }} </li>
      <li><b>Maximum Tolerable Precipitation (inches):</b> {{ plant.max_precip }} </li>

      <hr width="70%">
      <h3> Soil Needs </h3>
      <li><b>Root Depth (inches):</b> {{ plant.root_depth }} </li>
      <li><b>Adapted to Course Soil:</b> {{ plant.coarse_soil }} </li>
      <li><b>Adapted to Medium Soil:</b> {{ plant.medium_soil }} </li>
      <li><b>Adapted to Fine Soil:</b> {{ plant.fine_soil }} </li>
    <hr width="70%">
    <h3> Timing </h3>
    <li><b>Growth Period:</b> {{ plant.growth_period }} </li>
    <li><b>Blooming Period:</b> {{ plant.bloom_period }} </li>
    <li><b>Duration:</b> {{ plant.duration }} </li>
    <li><b>Height at Maturity (ft):</b> {{ plant.mature_height }} </li>
    <hr width="70%">
    <h3> Langiappe </h3>
    <li><b>Flower?</b> {{ plant.flower_conspicuous }} </li>
    <div v-if="plant.flower_conspicuous === 'Yes'">
    <li><b>Flower Color:</b> {{ plant.flower_color }} </li></div>
    <li><b>Fruit?</b> {{ plant.fruit_conspicuous }} </li>
    <li><b>Toxicity? </b>{{ plant.toxicity }} </li>
    </ul>
    </div>
    </div>
    <hr width="70%">
    <router-link to="/plants">Browse All</router-link> | <router-link to="/search">Search</router-link>
    
    <dialog class="modal" id="plant-details">
      <form>
        <br>
        <h1>{{ plant.common_name }}</h1>
        <v-select :options="['want to plant', 'planted']" v-model="gardenStatus"/>
        <br>
        <a href="/mygarden" class="button large" v-on:click="createGarden()">Add to Garden</a> 
        <br class="mini">
        <br class="mini">
        <button class="button small">X</button>
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
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  color: #eec6eb;
  max-width: 100%;
  width: 600px;
  max-height: 100%;
  border-radius: 9em;
  align-items: center;
}
br.mini {
  display: block;
  margin: 10px 0;
}
.showlist {
  list-style-type: none;
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
    axios.get("https://bulbbackend.herokuapp.com/api/plants/" + this.$route.params.id).then((response) => {
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
      axios.post("https://bulbbackend.herokuapp.com/api/gardens", params).then((response) => {
        console.log("adding to garden...", response.data);
      });
    },
  },
};
</script>