<template>
  <div class="PlantSearch">
    <div id="wrapper">

				<!-- Main -->
					<div id="main">

						<!-- Content -->
							<section id="content" class="main">

								<!-- Text -->
									<section>
                    <!-- <align-right><router-link to="/"><img src="images/home-solid.svg" alt="" />    </router-link> <router-link to="/search"><img src="images/search-solid.svg" alt="" /></router-link>
                    </align-right> -->
										<h1>{{message}}</h1>
                    <blockquote> Here at Bulb, we know that there's a green thumb in every gardener, a garden for every sprout. <br> If you're looking for help in choosing the perfect plant, you've come to the right place. <br><br>
                    Not sure what we're asking for?   <a href="/glossary" class="button">Check out the Glossary</a> <br><br>
                    Want to see what lives near you? <router-link to="/search/state" class="button">Search by State</router-link></blockquote>
                    <h3>Search by Characteristics</h3>
                    <v-select placeholder="-Drought Tolerance-" :options="['Low', 'Medium', 'High']" v-model="selectedDrought"/>
                    <br>
                    <v-select placeholder="-Shade Tolerance-" :options="['Tolerant', 'Intermediate', 'Intolerant']" v-model="selectedShade"/>
                    <br>
                    <v-select placeholder="-Moisture Needs-" :options="['Low', 'Medium', 'High']" v-model="selectedMoisture"/>
                    <br>
                    <v-select placeholder="-Duration-" :options="['Perennial', 'Annual', 'Biennial', 'Climate Dependent']" v-model="selectedDuration"/>
                    <br>
                    <v-select placeholder="-Flowering-" :options="['Yes', 'No']" v-model="selectedFlowering"/>
									</section>
                  <hr>
									<section>
										<div class="table-wrapper">
                      	<!-- <paginate 
														name="plants"
														:list="plants"
														:per="50"
														> -->
											<table>
												<thead>
													<tr>
														<th>Common Name</th>
														<th>Scientific Name</th>
														<th>More Info</th>
													</tr>
												</thead>
												<tbody>
													<tr v-for="plant in filterBy(filterBy(filterBy(filterBy(filterBy(plants, selectedDrought, 'drought_tolerance'), selectedShade, 'shade_tolerance'), selectedMoisture, 'moisture_needs'), selectedDuration, 'duration'), selectedFlowering, 'flower_conspicuous')">
														<td>{{ plant.common_name }}</td>
														<td>{{ plant.scientific_name }}</td>
														<td><router-link v-bind:to="`/plants/${plant.id}`"><img src="images/pagelines-brands.svg" alt="" /></router-link></td>
													</tr>
												</tbody>
											</table>
                      <!-- </paginate>
											<paginate-links for="plants" :simple="{prev: '<< Back', next: 'Next >>'}"></paginate-links> -->
										</div>
									</section>
							</section>

					</div>
       </div>
  </div>
</template>

<style>
.paginate-links.plants {
  text-align: center;
  list-style-type: none;
  font-size: 1.5em;
  cursor: pointer;
}
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
      paginate: ["plants"],
      selectedDrought: "",
      selectedShade: "",
      selectedMoisture: "",
      selectedDuration: "",
      selectedFlowering: "",
    };
  },
  created: function () {
    this.plantsIndex();
  },
  methods: {
    plantsIndex: function () {
      console.log("getting plants...");
      axios.get("https://bulbbackend.herokuapp.com/api/plants").then((response) => {
        console.log(response.data);
        this.plants = response.data;
      });
    },
  },
};
</script>