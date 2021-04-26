<template>
  <div class="PlantsIndex">
    <h1>{{ message }}</h1>
    <br>
    <div v-for="plant in plants">
      {{ plant.id }}. {{ plant.common_name}}
      <p><small><router-link v-bind:to="`/plants/${plant.id}`">More Details</router-link></small></p>
      <hr width="40%">
      <br><br>
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
      message: "Browse Plants",
      plants: [],
    };
  },
  created: function () {
    this.plantsIndex();
  },
  methods: {
    plantsIndex: function () {
      console.log("getting plants...");
      axios.get("/api/plants").then((response) => {
        console.log(response.data);
        this.plants = response.data;
      });
    },
  },
};
</script>