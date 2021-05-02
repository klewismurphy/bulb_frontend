<template>
  <div class="glossary">
    <div id="wrapper">
      <div id="main">
							<section id="content" class="main" style="text-align:center;">
								<span class="image main"><img src="images/84DACB1E-0B85-4A17-A746-7658CA07048D_1_201_a.jpeg" alt="" /></span>
								<h1>{{ message }}</h1>
								<h2>and where do I start?</h2>
								<p><small>If you see any terms on the site that you may not understand, we hope you find them explained on this page.</small></p>
                <h2 class="title"> Search Terms</h2>
										<div class="table-wrapper">
											<table class="alt">
												<tbody>
													<tr>
														<h3><td>Drought Tolerance</td></h3>
														<td>This is the ability of a plant to survive without water. Plants that are particularly drought resistant, tend to look different - think about the waxy leaves of an aloe plant! <br>Consider where you live, the amount of maintenance you are willing to do. <br>If your plant will need to sustain itself without water, choose high. If you live in a wet area, choose low. If you're not sure, choose medium or leave it blank.<br><br></td>
													</tr>
													<tr>
														<h3><td>Shade Tolerance</td></h3>
														<td>This is the plant's ability to tolerate low sunlight levels. Nearly all plants need a certain amount of light. We tend to measure this in hours.<br>
                            If your area is full sun, it recieves over 6 hours of sun a day. Choose Intolerant.<br> Between 4 to 6 hours of sunlight or anywhere that gets filtered light (for example, through the leaves of a large tree), choose Intermediate.<br> For under 4 hours of sun, choose Tolerant.<br><br></td>
													</tr>
													<tr>
														<h3><td>Moisture Needs</td></h3>
														<td>This is similar but different to drought tolerance - this is how much water your plant will need to thrive. Consider the area you want to plant in - does it have standing water when it rains? Choose High. <br> Are you too busy to commit to regular waterings, or hoping to conserve water, and hoping the rain will take care of it's needs? Choose Low <br> If you're unsure, choose Medium. Typically, bigger plants will need more water - but this isn't a hard and fast rule.<br><br></td>
													</tr>
													<tr>
														<h3><td>Duration</td></h3>
														<td>Duration refers to the length of life of the plant. <br> An annual is a plant that lives 1 year or less, typically just for the length of its growing season. These can be herbs, or many types of flowers. They can be replanted yearly, or allowed to go to seed to replant itself.<br> A biennial is a plant living 2 years or seasons, typically flowering within the second year. <br> A perennial is a plant that will persist for many growing seasons. It may die back in its off-season and regrow, or keep its leaves year round.<br> Climate Dependent means just that - many annuals that would die in a frost may live multiple growing seasons in a place that typically does not get cold enough to frost.<br><br></td>
													</tr>
													<tr>
														<h3><td>Flowering</td></h3>
														<td>This one is as straightforward as it gets - would you like your plant to have flowers on it?<br><br></td>
													</tr>
												</tbody>
											</table>
										</div>
                    <a href="/search" class="button primary">Start Your Search</a>
							</section>
              
              </div>
					</div>
  </div>
</template>

<style>
h2.title {
  text-align: left;
}
</style>

<script>
export default {
  data: function () {
    return {
      message: "What does it all mean?",
    };
  },
  created: function () {},
  methods: {},
};
</script>