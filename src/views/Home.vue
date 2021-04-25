<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h4>Eventually there will be some featured plants here</h4>
    <router-link to="/plants">See all plants</router-link>
    <p><router-link to="/search">Search</router-link></p>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "BULB",
    };
  },
  created: function () {},
  methods: {},
};
</script>