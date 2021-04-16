<template>
  <div class="PlantsIndex">
    <h1>{{ message }}</h1>
    <div v-for="plant in plants">
      {{ plant.id }}. {{ plant.scientific_name}}
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