import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'

// import du router
import router from './router'

// branchement router
const app = createApp(App)


axios.interceptors.request.use(request => {
    // Interception et ajout du token dans le header de la requete
    const token = localStorage.getItem('token')
    if(token){
        request.headers["Authorization"] = "bearer "+token
    }

    return request
})

axios.interceptors.response.use(res => {
    console.log(res.status)
    return res
}, (error) => {
    // SI token expiré - nettoyage localstorage ert redirection page login
    if(error.message == 'Request failed with status code 401'){
        localStorage.removeItem('token')
        router.push('/')
    }
    return Promise.reject(error.message)
})


app.use(router).mount('#app')