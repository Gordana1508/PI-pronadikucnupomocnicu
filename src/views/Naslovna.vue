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
