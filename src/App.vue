<template>
  <div id="app">
    <div> 
					<nav id="top">
            <div class="tooltip">
            <router-link to="/"><img src="images/home-solid.svg" alt="" /><span class="tooltiptext">home</span> ..... </span></router-link>
            <router-link to="/search"><img src="images/search-solid.svg" alt="" /><span class="tooltiptext">search</span> ..... </span></router-link>
            <router-link to="/login" v-if="!isLoggedIn()"><img src="images/sign-in-alt-solid.svg" alt="" /><span class="tooltiptext">login</span> ..... </span></router-link>
            <router-link to="/logout" v-if="isLoggedIn()"><img src="images/sign-out-alt-solid.svg" alt="" /><span class="tooltiptext">logout</span> ..... </span></router-link>
            <router-link to="/mygarden" v-if="isLoggedIn()"><img src="images/user-solid.svg" alt="" /><span class="tooltiptext">my garden</span> ..... </span></router-link>
            </div>
					</nav>
</div>
    <!-- <div id="nav>
      <router-link to="/">Home | </router-link>
      <router-link to="/signup" v-if="!isLoggedIn()">Signup | </router-link>
      <router-link to="/login" v-if="!isLoggedIn()">Login | </router-link> 
      <router-link to="/logout" v-if="isLoggedIn()">Logout | </router-link>
      <router-link to="/mygarden" v-if="isLoggedIn()">My Garden</router-link>
    </div> -->



        <!-- Header -->
    <header id="header">
      <span class="image"><img src="/images/Screen Shot 2021-05-06 at 6.21.43 PM.png" alt="" /></span>
      <br><br>
    </header>
    <router-view/>

<!-- Footer -->
    <footer id="footer">
      <!-- <section>
        <h2>Aliquam sed mauris</h2>
        <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
        <ul class="actions">
          <li><a href="generic.html" class="button">Learn More</a></li>
        </ul>
      </section> -->
      <!-- <section> -->
        <!-- <h2>Etiam feugiat</h2>
        <dl class="alt">
          <dt>Address</dt>
          <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
          <dt>Phone</dt>
          <dd>(000) 000-0000 x 0000</dd>
          <dt>Email</dt>
          <dd><a href="#">information@untitled.tld</a></dd>
        </dl> -->
        <!-- <ul class="icons">
          <li><a href="#" class="icon brands fa-twitter alt"><span class="label">Twitter</span></a></li>
          <li><a href="#" class="icon brands fa-facebook-f alt"><span class="label">Facebook</span></a></li>
          <li><a href="#" class="icon brands fa-instagram alt"><span class="label">Instagram</span></a></li>
          <li><a href="#" class="icon brands fa-github alt"><span class="label">GitHub</span></a></li>
          <li><a href="#" class="icon brands fa-dribbble alt"><span class="label">Dribbble</span></a></li>
        </ul>
      </section> -->
      <p class="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>


  </div>
</template>

<style>
#top {
  background-color: White;
  height: 60px;
  width: 60%;
  margin: auto;
  padding: 0.5em;
  text-align: center;
  border-bottom: 1px solid #eec6eb;
  border-left: 1px solid #eec6eb;
  border-right: 1px solid #eec6eb;
  border-radius: 20px;
}
.tooltip {
  position: relative;
  display: inline-block;
  text-decoration: none;
}
.tooltip .tooltiptext {
  visibility: hidden;
  font-size: 0.7em;
  font-family: "Indie Flower", cursive;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  width: 80px;
  top: 100%;
  margin-left: -60px;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  bottom: 100%; /* At the top of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}
</style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      console.log("logged in");
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>