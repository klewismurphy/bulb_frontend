<template>
  <div class="gardenindex">
    <div id="wrapper">
      <div id="main">
        <section id="content" class="main" style="text-align:center;">
          <h1 style="text-align:center">{{ message }}<br></h1>
          
          <span class="image main"><img src="/images/BB444913-213F-4514-BF90-A6B268D13510_1_201_a.jpeg" alt="" height="550" /></span>
          
          <div class="index" v-for="garden in gardens">
            <h2>{{ garden.plant }}</h2>
      <router-link v-bind:to="`/plants/${garden.plant_id}`" class="button large">Plant Info</router-link> |
      <button class="button large" v-on:click="showGarden(garden)">Update</button>
      <br>
      <br>
    </div>
    <div v-if="gardens.length === 0">
      <h2>Oops! Nothing has been saved to your garden yet.</h2>
      <a href="/search" class="button primary">Start Searching</a>
      </div>
     
    <dialog class="modal" id="garden-details">
      <form>
        <h1>{{currentGarden.plant}}</h1>
        <h3>Current Status: {{currentGarden.status}}</h3>
        <v-select :options="['want to plant', 'planted']" v-model="currentGarden.status"/>
        <br>
        <button class="button large" v-on:click="updateGarden(currentGarden)">Update Status</button> | <button class="button large" v-on:click="deletePlant(currentGarden)">Remove Plant</button>
         <br class="mini">
        <br class="mini">
        <button class="button small">X</button>
      </form>
    </dialog>
    <br><br>
    
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
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  color: #eec6eb;
  max-width: 100%;
  width: 700px;
  max-height: 100%;
  border-radius: 9em;
  align-items: center;
}
br.mini {
  display: block;
  margin: 10px 0;
}
</style>

<script>
import axios from "axios";
import "vue-select/dist/vue-select.css";
export default {
  data: function () {
    return {
      message: "my garden",
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