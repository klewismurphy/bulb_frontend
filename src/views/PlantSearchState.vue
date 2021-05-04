<template>
  <div class="PlantSearchState">
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
                    <blockquote> Find out what's already in your state! Plants that are already used to the climate of your area tend to be hardier and lower maintenance - not to mention great for the environment and all the critters that share it with us. <br> <br><br><router-link to="/search" class="button">Return to Search by Characteristics</router-link></blockquote>
                    <v-select placeholder="-State-" :options="['AL','AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']" v-model="selectedState"/><br>
                    <div style="text-align:center;"><button class="button large" v-on:click="statesIndex(selectedState)">Search by State</button>
										<br><br>
                    <v-select placeholder="-Native Status-" :options="['Native', 'Introduced']" v-model="selectedStatus"/>
                    <br>
                    </div>
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
													<tr v-for="plant in filterBy(plants, selectedStatus, 'native_status')">
														<td>{{ plant.common_name }}</td>
														<td>{{ plant.scientific_name }}</td>
														<td><router-link v-bind:to="`/plants/${plant.id}`">See more info!</router-link></td>
														
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
      message: "Search for Local Plants",
      plants: [],
      allplants: [],
      paginate: ["plants"],
      selectedState: "",
      selectedStatus: "",
    };
  },
  created: function () {
    this.plantsIndex();
  },
  methods: {
    statesIndex: function (selectedState) {
      console.log("getting plants...");
      axios.get(`/api/states/${selectedState}`).then((response) => {
        console.log(response.data);
        this.plants = response.data;
      });
    },
    plantsIndex: function () {
      console.log("getting plants...");
      axios.get("/api/plants").then((response) => {
        console.log(response.data);
        this.allplants = response.data;
      });
    },
  },
};
</script>