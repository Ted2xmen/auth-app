<template>
  <div class="home">
    <h2>Welcome {{ name }}</h2>
    <router-link to="/about">about</router-link>
    <br />
    <br />
    <button class="logout" @click="Logout">Logout</button>
  </div>
</template>



<script>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase";

export default {
  setup() {
    const name = ref("");

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;

      if (user) {
        name.value = user.email.split("@")[0];
      }
    });

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => alert("Signed out"))
        .catch((err) => alert(err.message));
    };

    return {
      name,
      Logout,
    };
  },
};
</script>