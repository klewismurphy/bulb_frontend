<template>
  <div class="login">
    <div id="wrapper">
      <div id="main">
        <section id="content" class="main">
          <section>
            <h2>Login</h2>
            <form v-on:submit.prevent="submit()">
              <ul>
                <li class="text-danger" v-for="error in errors" v-bind:key="error">
                  {{ error }}
                </li>
              </ul>
                <div class="col-6 col-12-xsmall">
                  <input type="email" class="form-control" v-model="email" placeholder="Email" />
                </div>
                <br>
                  <div class="col-6 col-12-xsmall">
                  <input type="password" class="form-control" v-model="password" placeholder="Password" />
                </div>
                <br>
                <div class="col-12">
                  <ul class="actions">
                    <li><input type="submit" value="Submit" class="primary" /></li>
                    <li><input type="reset" value="Reset" /></li>
                  </ul>
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
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>