<template>
  <div class="box">
    <form v-on:submit.prevent="modify" class="form">
      <span class="text-center">Modification de vos informations</span>
      <div class="input-container">
        <input
          type="text"
          id="name"
          name="name"
          class="form__input"
          required
          v-model="profile.name"
        />
        <label for="name">Nom :</label>
      </div>
      <div class="input-container">
        <input
          type="text"
          id="firstname"
          name="firstname"
          class="form__input"
          required
          v-model="profile.firstname"
        />
        <label for="firstname">Prénom :</label>
      </div>
      <button>Modifier</button>
    </form>
  </div>
</template>


<script>
// import des modules
import axios from "axios";
import jwt_decode from "jwt-decode";

// récupération des data des input
export default {
  name: "Modify",
  data() {
    return {
      profile: {
        name: "",
        firstname: "",
      },
    };
  },
  methods: {
    modify() {
      // traitement des data
      let profileDatas = {
        name: this.profile.name,
        firstname: this.profile.firstname,
      };
      // recherche du user
      let userId = 0;
      let token = localStorage.getItem("token");
      if (token) {
        let decode = jwt_decode(token);
        userId = decode.id;
      }
      // envoie des data a la DB retour sur la page profile
      let url = `http://localhost:8000/users/${userId}`;
      axios
        .patch(url, profileDatas)
        .then(() => {
          this.$router.push("/profile");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>