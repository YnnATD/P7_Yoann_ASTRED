<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view />
  <!-- Site footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About</h6>
          <p class="text-justify">
            Notre entreprise, spécialisée dans la grande distribution, est en
            pleine expansion. Nous avons actuellement plus de 600 collaborateurs
            et avons beaucoup recruté depuis quelques années. Nous étions
            uniquement 300 il y a 3 ans.
          </p>
        </div>
      </div>
      <hr />
    </div>
  </footer>
</template>

<script>
</script>

<style>
body {
  background-color: #fecdce;
  margin: 0;
  min-width: max-content;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  height: 300px;
}
.login_signup_setup {
  padding-bottom: 60px;
  padding-top: 15px;
  margin-left: 25%;
  margin-right: 25%;
  border-radius: 5%;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
  background-color: white;
  margin-bottom: 25%;
}
input {
  border: solid 1px;
  border-radius: 10px;
  margin-left: 5px;
  display: flex;
  margin-bottom: 10px;
}
.form__cartouche {
  text-align: -webkit-center;
}
button {
  cursor: pointer;
  color: #494949 !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 10px;
  border: 4px solid #494949 !important;
  display: inline-block;
  transition: all 0.4s ease 0s;
  margin-top: 20px;
}
button:hover {
  color: #ffffff !important;
  background: #f6b93b;
  border-color: #f6b93b !important;
  transition: all 0.4s ease 0s;
}
.site-footer {
  position: absolute;
  background-color: #26272b;
  padding: 30px 0 200px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}
.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}

.user_menu{
    display: flex;
    flex-direction: column;
    margin-left: 25%;
    margin-right: 25%;
}
.modifyInfo{
  border-radius: 5em;;
}
</style>