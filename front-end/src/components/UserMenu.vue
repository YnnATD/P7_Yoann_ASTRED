<template>
  <div class="user_menu">
    <button class="modifyInfo"><router-link to="/edit">Modifier mes informations</router-link></button>
    <button>
      <router-link to="/" @click="deconnect">Se déconnecter</router-link>
    </button>
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