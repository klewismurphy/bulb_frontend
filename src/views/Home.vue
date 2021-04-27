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

    <!-- First Section
      <section id="first" class="main special">
        <header class="major">
          <h2>Magna veroeros</h2>
        </header>
        <ul class="features">
          <li>
            <span class="icon solid major style1 fa-code"></span>
            <h3>Ipsum consequat</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
          </li>
          <li>
            <span class="icon major style3 fa-copy"></span>
            <h3>Amed sed feugiat</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
          </li>
          <li>
            <span class="icon major style5 fa-gem"></span>
            <h3>Dolor nullam</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
          </li>
        </ul>
        <footer class="major">
          <ul class="actions special">
            <li><a href="generic.html" class="button">Learn More</a></li>
          </ul>
        </footer>
      </section> -->

    <!-- Second Section -->
      <section id="second" class="main special">
        <header class="major">
          <h2>featured plants</h2>
          <p>Figure out how to get a random selection of plants here</p>
        </header>
        <ul class="statistics">
          <li class="style1">
            <span class="icon fa-pagelines"></span>
            <strong>5,120</strong> Etiam
          </li>
          <li class="style2">
            <span class="icon fa-folder-open"></span>
            <strong>8,192</strong> Magna
          </li>
          <li class="style3">
            <span class="icon solid fa-signal"></span>
            <strong>2,048</strong> Tempus
          </li>
          <li class="style4">
            <span class="icon solid fa-laptop"></span>
            <strong>4,096</strong> Aliquam
          </li>
          <li class="style5">
            <span class="icon fa-gem"></span>
            <strong>1,024</strong> Nullam
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
    };
  },
  created: function () {},
  methods: {},
};
</script>