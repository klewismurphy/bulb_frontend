<template>
  <div class="signup">

    	<div id="wrapper">

				<!-- Main -->
					<div id="main">

          <!-- Content -->
            <section id="content" class="main">
              	<span class="image main"><img src="/images/14B64292-5472-43B1-B7D4-B3B062402FB9_1_105_c.jpeg" alt="" /></span>
                <section>
                  <h2>Signup</h2>
                  <form v-on:submit.prevent="submit()">
                    <ul>
                      <li class="text-danger" v-for="error in errors" v-bind:key="error">
                        {{ error }}
                      </li>
                    </ul>
                    <div class="row gtr-uniform">
                      <div class="col-6 col-12-xsmall">
                        <input type="text" class="form-control" v-model="name" placeholder="Name" />
                      </div>
                      <div class="col-6 col-12-xsmall">
                        <input type="email" class="form-control" v-model="email" placeholder="Email" />
                      </div>
                       <div class="col-6 col-12-xsmall">
                        <input type="password" class="form-control" v-model="password" placeholder="Password" />
                      </div>
                      <div class="col-6 col-12-xsmall">
                        <input type="password" class="form-control" v-model="passwordConfirmation" placeholder="Password Confirmation" />
                      </div>
                      <div class="col-12">
                        <ul class="actions">
                          <li><input type="submit" value="Submit" class="primary" /></li>
                          <li><input type="reset" value="Reset" /></li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </section>

            </section>

					</div>
			</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>