<template>
  <section>
    <div class="account_setup">
      <h2>
        Bienvenue sur votre espace personnel <br />
        "{{ userAccount.firstName }} {{ userAccount.name }}"
      </h2>
      <UserMenu></UserMenu>
    </div>
  </section>
</template>

<script>
// import des modules
import UserMenu from "../components/UserMenu";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default {
  name: "Account",
  components: {
    UserMenu,
  },
  data() {
    return {
      userAccount: {
        userId: "",
        firstName: "",
        name: "",
      },
    };
  },
  mounted() {
    let token = localStorage.getItem("token");
    let decode = jwt_decode(token);

    this.userAccount.userId = decode.id;

    let url = `http://localhost:8000/users/${this.userAccount.userId}`;
    axios
      .get(url)
      .then((res) => {
        this.userAccount.firstName = res.data.data.firstname;
        this.userAccount.name = res.data.data.name;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>
ul {
  list-style: none;
  padding-left: 0px;
}
.account_setup {
  padding-bottom: 60px;
  padding-top: 15px;
  margin-left: 25%;
  margin-right: 25%;
  border-radius: 5%;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
  background-color: white;
  margin-bottom: 25%;
}
@media screen and (max-width: 580px) {
  .account_setup{
    margin: 0px;
    margin-bottom: 10em;
    background-color: white;
    border-radius: 2em;
    padding: 70px 0px;
    border-radius: 2em;
  }
  
}
</style>