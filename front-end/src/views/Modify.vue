<template>  
    <div class="login_signup_setup">          
        <h2>Modification de vos informations</h2>
        <form v-on:submit.prevent="modify" class="form" >
          <div class="form__cartouche">
            <label for="name">Nom :</label>
            <input type="text" id="name" name="name" class="form__input" required v-model="profile.name">
          </div>
          <div class="form__cartouche">
            <label for="firstname">Prénom :</label>
            <input type="text" id="firstname" name="firstname" class="form__input" required v-model="profile.firstname">
          </div>  
          <button>Modifier</button>                                       
        </form> 
      </div> 
</template>


<script>
import axios from 'axios'
import jwt_decode from "jwt-decode"
export default {
    name: 'Modify',
    data() {
        return {
            profile: {
                name: "",
                firstname: ""
            }
        }
    },
    methods: {
        modify() {
            let profileDatas = {                
                "name": this.profile.name,
                "firstname": this.profile.firstname
            }

            let userId = 0
            let token = localStorage.getItem('token')
            if(token){
                let decode = jwt_decode(token)
                userId = decode.id
            }
            

            let url = `http://localhost:8000/users/${userId}`
            axios.patch(url, profileDatas)
                .then(() => {
                    this.$router.push("/profile")
                })
                .catch(error => console.log(error))
        }
    }
}
</script>

<style>

</style>