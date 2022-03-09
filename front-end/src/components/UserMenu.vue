<template>
  <div class="user_menu">
    <router-link to="/edit"><button class="modifyInfo">Modifier mes informations</button></router-link>
      <router-link to="/" @click="deconnect"><button>Se déconnecter</button></router-link>
  </div>
</template>

<script>
export default {
  name: "UserMenu",
  data() {
    return {};
  },
  methods: {
    deconnect() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
</style>