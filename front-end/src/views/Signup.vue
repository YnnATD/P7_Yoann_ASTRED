<template>  
    <div class="login_signup_setup">          
        <h2>Veuillez remplir ce formulaire <br> afin de créer votre compte</h2>
        <form v-on:submit.prevent="signup" class="form" >
          <div class="form__cartouche">
            <label for="name">Nom :</label>
            <input type="text" id="name" name="name" class="form__input" required v-model="signupInput.name">
          </div>
          <div class="form__cartouche">
            <label for="firstname">Prénom :</label>
            <input type="text" id="firstname" name="firstname" class="form__input" required v-model="signupInput.firstName">
          </div> 
          <div class="form__cartouche">
            <label for="email">E-mail :</label>
            <input type="email" id="mail" name="mail" class="form__input" required v-model="signupInput.mail">
          </div>
          <div class="form__cartouche">
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" name="password" class="form__input" required v-model="signupInput.password">
          </div>  
          <button>S'inscrire</button>                                       
        </form> 
          <nav class="nav_login_signup"><p>Vous avez déjà un compte ? <router-link to="/">Connectez-vous</router-link></p></nav> 
      </div> 
</template>


<script>
import axios from 'axios'
export default {
    name: 'Signup',
    data() {
        return {
            signupInput: {
                name: "",
                firstName: "",
                email: "",
                password: ""
            }
        }
    },
    methods: {
        signup() {
            let signupDatas = {
                "name": this.signupInput.name,
                "firstname": this.signupInput.firstName,
                "email": this.signupInput.mail,
                "password": this.signupInput.password
            }
            console.log(signupDatas)
            let url = "http://localhost:8000/users"
            axios.put(url, signupDatas)
                .then((res) => {
                    //localStorage.setItem("token", res.data.token);
                    console.log(res)
                    this.$router.push("/")
                })
                .catch(error => console.log(error))
        }
    }
}
</script>

<style lang="scss">

</style>