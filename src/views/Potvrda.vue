<template>
    <div class="Potvrda">
<a href="#" @click="odjava()" class="nav-link">Odjava</a>
    <img src="@/assets/slika2.jpg" class="img-fluid">
    <h1>PRONAĐI KUĆNU POMOĆNICU</h1>
     <div class="divider"></div>
    <h3>Kućna pomoćnica dolazi na Vašu adresu u odabranom terminu!</h3>
    <div class="divider"></div>
    <img src="@/assets/images.jpg" class="rounded">
    <div class="divider"></div>
    <div class="button">
        <router-link to="/Oglasi">
        <button class="button">Prikaži sve oglase</button>
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
.Potvrda {
  width: fit-content;
  height: fit-content;
  background-color:rgba(128, 216, 236, 0.97);
  background-attachment: fixed;
  border-radius: undefinedpx 0 0 0;
}
h1 {
  color:black;
  font-family: 'Times New Roman';
  font-size: 76px;
  text-align: center;
}
.container {
  color:black;
  background-color: yellow;
  font-family: 'Times New Roman';
  font-weight: bold;
}
.nav-link {
  color:black;
  background-color: yellow;
  font-family: 'Times New Roman';
  font-weight: bold;
  text-align: center;
}
div {
  text-align: center;
}
h3{
  color: black;
  font-family: 'Times New Roman';
  font-weight: bold;
  text-align: center;
}
.divider{
  height: 20px;
}
button {
  width: 250px;
  height: 60px;
  background-color: yellow;
  color: black;
  font-size: 130%;
  font-family: 'Times New Roman';
  font-weight: bold;
    }
img {
    position: centar;
}
</style>