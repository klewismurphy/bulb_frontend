<template>
  <div class="PlantSearch">
    <h1>{{ message }}</h1>
    <br>
    <p> Here at Bulb, we know that there's a green thumb in every gardener, a garden for every sprout. </p>
    <p> If you're looking for help in choosing the perfect plant, you've come to the right place. </p>
    <hr width="20%">

    <h3>Drought Tolerance</h3>
    <v-select :options="['Low', 'Medium', 'High']" v-model="selectedDrought"/>
    <br>
    <h3>Shade Tolerance</h3>
    <v-select :options="['Tolerant', 'Intermediate', 'Intolerant']" v-model="selectedShade"/>
    <br>
    <h3>Moisture Needs</h3>
    <v-select :options="['Low', 'Medium', 'High']" v-model="selectedMoisture"/>



    <br>
    <br>
    <hr>
    <br>
    <div v-for="plant in filterBy(filterBy(filterBy(plants, selectedDrought, 'drought_tolerance'), selectedShade, 'shade_tolerence'), selectedMoisture, 'moisture_needs')">
      {{ plant.id }}. {{ plant.scientific_name}}
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
import Vue2Filters from "vue2-filters";
import "vue-select/dist/vue-select.css";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "What Should I Plant Here?",
      plants: [],
      selectedDrought: "",
      selectedShade: "",
      selectedMoisture: "",
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