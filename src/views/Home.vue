<template>
  <div class="home">
    <!-- <h1>{{ message }}</h1>
    <h4>Eventually there will be some featured plants here</h4>
    <router-link to="/plants">See all plants</router-link>
    <p><router-link to="/search">Search</router-link></p>
  </div> -->

<!-- Nav -->
<div id="wrapper">
  <nav id="nav">
    <ul>
      <li><a href="#intro" class="active">About</a></li>
      <!-- <li><a href="#first">Featured Plants</a></li> -->
      <li><a href="#second">Featured Plants</a></li>
      <li><a href="#cta">Getting Started</a></li>
    </ul>
  </nav>

<!-- Main -->
  <div id="main">

    <!-- Introduction -->
      <section id="intro" class="main">
        <div class="spotlight">
          <div class="content">
            <header class="major">
              <h2>growth mindset</h2>
            </header>
            <p>about stuff, what's up</p>
            <ul class="actions">
              <li><a href="/search" class="button">Start Searching</a></li>
            </ul>
          </div>
          <span class="image"><img src="images/pic01.jpg" alt="" /></span>
        </div>
      </section>
      <section id="second" class="main special">
        <header class="major">
          <h2>today's featured plants</h2>
        </header>
        <ul class="statistics">
          <li class="style1">
            <img src="images/pagelines-brands.svg"></span>
            <strong><br> {{ plants[Math.floor(Math.random() * plants.length)].common_name }} </strong>
          </li>
          <li class="style2">
            <img src="images/pagelines-brands.svg"></span>
            <strong><br>{{ plants[Math.floor(Math.random() * plants.length)].common_name }}</strong>
          </li>
          <li class="style3">
            <img src="images/pagelines-brands.svg"></span>
            <strong><br>{{ plants[Math.floor(Math.random() * plants.length)].common_name }}</strong>
          </li>
          <li class="style4">
            <img src="images/pagelines-brands.svg"></span>
            <strong><br>{{ plants[Math.floor(Math.random() * plants.length)].common_name }}</strong>
          </li>
          <li class="style5">
            <img src="images/pagelines-brands.svg"></span>
            <strong><br>{{ plants[Math.floor(Math.random() * plants.length)].common_name }}</strong>
          </li>
        </ul>
        
        <p class="content"></p>
        <footer class="major">
          <ul class="actions special">
            <li><a href="/plants" class="button">Browse All Plants</a></li>
          </ul>
        </footer>
      </section>

    <!-- Get Started -->
      <section id="cta" class="main special">
        <header class="major">
          <h2>let's get some dirt under those fingernails</h2>
          <p>make an account to start saving plants to your garden<br>
          or log in to get back out there</p>
        </header>
        <footer class="major">
          <ul class="actions special">
            <li><a href="/signup" class="button primary">Signup</a></li>
            <li><a href="/login" class="button">Login</a></li>
          </ul>
        </footer>
      </section>
    </div>
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
      message: "bulb",
      plants: [],
      feat_plant1: {},
      paginate: ["plants"],
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
        // this.feat_plant1 = plants[Math.floor(Math.random() * plants.length)];
      });
    },
  },
};
</script>