<template>
  <div class="PlantsIndex">
    <div id="wrapper">

				<!-- Main -->
					<div id="main">

						<!-- Content -->
							<section id="content" class="main" >

								<!-- Text -->
									<section>
                    <!-- <align-right><router-link to="/"><img src="images/home-solid.svg" alt="" />    </router-link> <router-link to="/search"><img src="images/search-solid.svg" alt="" /></router-link>
                    </align-right> -->
										<h1 style="text-align:center;">Browse All Plants</h1>
                    <hr >
									</section>
									<section>
										<div class="table-wrapper">
												<paginate 
														name="plants"
														:list="plants"
														:per="50"
														>
														<table>
												<thead>
													<tr>
														<th>Common Name</th>
														<th>Scientific Name</th>
														<th>More Info</th>
													</tr>
												</thead>
												<tbody>
												
													<tr v-for="plant in paginated('plants')">
														<td>{{ plant.common_name }}</td>
														<td>{{ plant.scientific_name }}</td>
														<td><router-link v-bind:to="`/plants/${plant.id}`"><img src="images/pagelines-brands.svg" alt="" /></router-link></td>
													</tr>
												</tbody>
											</table>
											</paginate>
											<paginate-links for="plants" :simple="{prev: '<< Back', next: 'Next >>'}"></paginate-links>
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
export default {
  data: function () {
    return {
      message: "Browse Plants",
      plants: [],
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
      });
    },
  },
};
</script> 