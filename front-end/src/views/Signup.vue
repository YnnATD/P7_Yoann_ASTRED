<template>  
    <div class="box">
      <span class="text-center">Veuillez remplir ce formulaire <br> afin de créer votre compte</span>          
        <form v-on:submit.prevent="signup" class="form" >
          <div class="input-container">
            <input type="text" id="name" name="name" class="form__input" required v-model="signupInput.name">
            <label for="name">Nom :</label>            
          </div>
          <div class="input-container">
            <input type="text" id="firstname" name="firstname" class="form__input" required v-model="signupInput.firstName">
            <label for="firstname">Prénom :</label>            
          </div> 
          <div class="input-container">
            <input type="email" id="mail" name="mail" class="form__input" required v-model="signupInput.mail">
            <label for="email">E-mail :</label>            
          </div>
          <div class="input-container">
            <input type="password" id="password" name="password" class="form__input" required v-model="signupInput.password">
            <label for="password">Mot de passe :</label>            
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