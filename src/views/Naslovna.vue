<template>
<div id="nav">
    <nav class="navbar navbar-light bg-light">
        <div class="containr">
            <p>
                <a href="#" @click="odjava()" class="nav-link">Odjavi se</a>
            </p>
        </div>
    </nav>
    <h1>PRONAĐI KUĆNU POMOĆNICU</h1>
    <h2>Dobrodošli na aplikaciju za pronalazak kućne pomoćnice</h2>
    <div class="text">
        <router-link to="/Oglasi">
        <button class="btn btn primary">
            <strong>Pregled oglasa</strong>
        </button>
        </router-link>
    </div>
</div>

</template>

<script>
import { firebase } from "@/firebase.js";

    export default {
        data: function(){

        },
        methods: {
            odjava: function(){
                firebase.auth().signOut().then(() => {

                });
                this.$router.replace({name:"Home"});
            },
        },
    };
</script>

<style scoped>
    button {
        position: relative;
        background-color: yellow;
        border-radius: 10px;
        position: relative;
    }
</style>