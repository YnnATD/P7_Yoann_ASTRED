<template>
  <img class="top_logo" alt="logo top grouporama" src="./assets/logo.png" />
  <router-view />
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
      <h6>Link</h6>
      <div class="footer_link">
        <div class="netlink">
          <a href="https://github.com/YnnATD/P7_Yoann_ASTRED">
            <img
              class="footer_logo"
              alt="logo github"
              src="./assets/logogithub.png"
            />
          </a>
          <a
            class="footer_netlink"
            href="https://github.com/YnnATD/P7_Yoann_ASTRED"
            >Repositorie github</a
          >
        </div>
        <div class="netlink">
          <a
            href="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P7/Groupomania_Specs_FR_DWJ_VF.pdf"
          >
            <img
              class="footer_logo"
              alt="logo top grouporama"
              src="./assets/logogroupo.png"
            />
          </a>
          <a
            class="footer_netlink"
            href="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P7/Groupomania_Specs_FR_DWJ_VF.pdf"
            >Spécifications fonctionnelles</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
</script>

<style>
body {
  background-color: #fecdce;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*** IMAGE TOP  ***/
.top_logo {
  height: 250px;
}

/*** BUTTON  ***/
button {
  cursor: pointer;
  color: #494949 !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 10px;
  border: 2px solid #494949 !important;
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

/*** FOOTER  ***/
.site-footer {
  background-color: #26272b;
  padding: 30px 0 100px;
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
.footer_logo {
  width: 100px;
  height: 75px;
  align-self: center;
}
.footer_link {
  display: flex;
  justify-content: center;
}
.netlink {
  display: flex;
  flex-direction: column;
  padding: 1em;
}
.footer_netlink {
  color: white;
  margin-top: 10px;
}

/*** MODIFY VUE  ***/
.user_menu {
  display: flex;
  flex-direction: column;
  margin-left: 25%;
  margin-right: 25%;
}
.modifyInfo {
  border-radius: 5em;
}

/*** LINK  ***/
a {
  text-decoration: none;
  color: #494949;
}
a:hover {
  text-decoration: underline;
  color: #224061;
}

/*** GENERAL VUE  ***/
@import url("https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&subset=greek-ext");

.text-center {
  text-transform: uppercase;
  font-size: 23px;
  margin: -50px 0 80px 0;
  display: block;
  text-align: center;
}
.box {
  margin-bottom: 25%;
  background-color: white;
  border-radius: 2em;
  padding: 70px 100px;
  margin-left: 20%;
  margin-right: 20%;
  border-radius: 2em;
}
.input-container {
  position: relative;
  margin-bottom: 25px;
}
.input-container label {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 16px;
  pointer-event: none;
  transition: all 0.5s ease-in-out;
}
.input-container input {
  border: 0;
  border-bottom: 1px solid #555;
  background: transparent;
  width: 100%;
  padding: 8px 0 5px 0;
  font-size: 16px;
  padding: 10px;
}
.input-container input:focus {
  border: none;
  outline: none;
  border-bottom: 2px solid #fecdce;
}
.input-container input:focus ~ label,
.input-container input:valid ~ label {
  top: -12px;
  font-size: 12px;
}
input[type="password"] {
  -webkit-text-security: disc;
}
/*** medias queries ***/
@media screen and (max-width: 580px) {
  .footer_link {
    flex-direction: column;
  }
  .box {
    margin: 0px;
    margin-bottom: 10em;
    background-color: white;
    border-radius: 2em;
    padding: 70px 40px;
    border-radius: 2em;
  }
  .site-footer {
    border-radius: 2em 2em 0em 0em;
  }
}
</style>