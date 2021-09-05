import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";




const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
