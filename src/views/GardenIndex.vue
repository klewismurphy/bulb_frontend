<template>
  <div class="gardenindex">
    <h1>{{ message }}</h1>
    <br>
    <div v-for="garden in gardens">
      <h4>{{ garden.plant }}</h4>
      <router-link v-bind:to="`/plants/${garden.plant_id}`" >Plant Info</router-link> | <button v-on:click="showGarden(garden)">Update</button>
      <hr width="20%">
    </div>
    <dialog id="garden-details">
      <form>
        <h2>{{currentGarden.plant}}</h2>
        <h3>Current Status: {{currentGarden.status}}</h3>
        <!-- <p> Update Status: </p> -->
        <v-select :options="['want to plant', 'planted']" v-model="currentGarden.status"/>
        <br>
        <button v-on:click="updateGarden(currentGarden)">Update Status</button> | <button v-on:click="deletePlant(currentGarden)">Remove Plant</button>
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