<template>
  <div class="box">
    <form v-on:submit.prevent="signin" class="form">
      <span class="text-center">Formulaire de connexion</span>
      <div class="input-container">
        <input type="text" required v-model="signinInput.mail" />
        <label for="email">E-mail :</label>
      </div>
      <div class="input-container">
        <input type="password" required v-model="signinInput.password" />
        <label for="password">Mot de passe :</label>
      </div>
      <button>Se connecter</button>
    </form>
    <nav class="nav_login_signup">
      <p>
        Vous n'avez pas de compte ?
        <router-link to="/login">Créer un comtpe</router-link>
      </p>
    </nav>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      signinInput: {
        mail: "",
        password: "",
      },
    };
  },
  methods: {
    signin() {
      let signinDatas = {
        email: this.signinInput.mail,
        password: this.signinInput.password,
      };
      console.log(signinDatas);
      let url = "http://localhost:8000/auth/login";
      axios
        .post(url, signinDatas)
        .then((res) => {
          localStorage.setItem("token", res.data.access_token);
          console.log(res);
          this.$router.push("/profile");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss">
</style>