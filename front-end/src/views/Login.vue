<template>  
    <div class="login_signup_setup">          
        <h2>Formulaire de connexion</h2>
        <form v-on:submit.prevent="signin" class="form" >
          <div class="form__cartouche">
            <label for="email">E-mail :</label>
            <input type="email" id="mail" name="mail" class="form__input" required v-model="signinInput.mail">
          </div>
          <div class="form__cartouche">
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" name="password" class="form__input" required v-model="signinInput.password">
          </div>  
          <button>Se connecter</button>                                       
        </form> 
          <nav class="nav_login_signup"><p>Vous n'avez pas de compte ? <router-link to="/login">Créer un comtpe</router-link></p></nav> 
      </div> 
</template>


<script>
import axios from 'axios'
export default {
    name: 'login',
    data() {
        return {
            signinInput: {
                mail: "",
                password: ""
            }
        }
    },
    methods: {
        signin() {
            let signinDatas = {                
                "email": this.signinInput.mail,
                "password": this.signinInput.password
            }
            console.log(signinDatas)
            let url = "http://localhost:8000/auth/login"
            axios.post(url, signinDatas)
                .then((res) => {
                    localStorage.setItem("token", res.data.access_token);
                    console.log(res)
                    this.$router.push("/profile")
                })
                .catch(error => console.log(error))
        }
    }
}
</script>

<style lang="scss">
</style>