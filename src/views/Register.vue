<template>
    <div class="register">
        <h2>Register</h2>
       <form @submit.prevent="Register">
    <input type="text" placeholder="E mail" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <input type="submit" value="Register" id="">
    <p>Already registered <router-link to="/login">Go Login</router-link> </p>

</form>
    </div>
</template>



<script>
import { ref } from 'vue';
import firebase from 'firebase';
export default {
    setup() {
        const email= ref("");
        const password= ref("");

        const Register = () => {
            firebase
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value)
            .then(user => {
                alert("successfully");
                console.log(user);
            })
            .catch(err => alert(err.message) );
        }
        return{
            Register,
            email,
            password
        }
    },
}
</script>