<template>
  <div class="gardenindex">
    <div id="wrapper">
      <div id="main">
        <section id="content" class="main">
          <h1 style="text-align:center">{{ message }}</h1>
          <div class="index" v-for="garden in gardens">
            <h2>{{ garden.plant }}</h2>
      <router-link v-bind:to="`/plants/${garden.plant_id}`" class="button large">Plant Info</router-link> |
      <a href="/mygarden" class="button large" v-on:click="showGarden(garden)">Update</a>
      <br>
      <br>
    </div>
     
    <dialog id="garden-details">
      <form>
        <h2>{{currentGarden.plant}}</h2>
        <h3>Current Status: {{currentGarden.status}}</h3>
        <v-select :options="['want to plant', 'planted']" v-model="currentGarden.status"/>
        <br>
        <button v-on:click="updateGarden(currentGarden)">Update Status</button> | <button v-on:click="deletePlant(currentGarden)">Remove Plant</button>
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
div.index {
  text-align: center;
  border-style: solid;
  border-color: #00ff00;
  border-radius: 55px;
  border-width: 1px;
  padding: 0.5em;
  width: auto;
}
</style>

<script>
import axios from "axios";
import "vue-select/dist/vue-select.css";
export default {
  data: function () {
    return {
      message: "My Garden",
      gardens: {},
      currentGarden: {},
    };
  },
  created: function () {
    this.gardenIndex();
  },
  methods: {
    gardenIndex: function () {
      console.log("getting garden...");
      axios.get("/api/gardens").then((response) => {
        console.log(response.data);
        this.gardens = response.data;
      });
    },
    showGarden: function (garden) {
      this.currentGarden = garden;
      document.querySelector("#garden-details").showModal();
    },
    updateGarden: function (garden) {
      var params = {
        plant_id: garden.plant_id,
        status: garden.status,
      };
      axios
        .patch("/api/gardens/" + garden.id, params)
        .then((response) => {
          console.log("updating garden...", response.data);
          this.currentGarden = {};
        })
        .catch((error) => {
          console.log("error occurred updating garden", error.response);
        });
    },
    deletePlant: function (garden) {
      console.log("deleting plant from garden...");
      axios
        .delete("/api/gardens/" + garden.id)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log("error occurred deleting plant", error.response);
        });
    },
  },
};
</script>