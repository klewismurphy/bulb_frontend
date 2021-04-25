<template>
  <div class="gardenindex">
    <h1>{{ message }}</h1>
    <br>
    <div v-for="garden in gardens">
      <h4>{{ garden.plant }}</h4>
      <router-link v-bind:to="`/plants/${garden.plant_id}`" >Plant Info</router-link> | <router-link to="">Update</router-link>
      <hr width="20%">
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "My Garden",
      gardens: {},
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
  },
};
</script>