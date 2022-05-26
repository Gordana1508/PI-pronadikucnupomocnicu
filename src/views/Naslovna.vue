<template>
<div class ="Naslovna">
    <div>
    <a href="#" @click="odjava()" class="nav-link">Odjava</a>
    </div>
    <img src="@/assets/slika1.jpg" class="img-fluid">
    <h1>PRONAĐI KUĆNU POMOĆNICU</h1>
    <h2>Dobrodošli na aplikaciju za pronalazak kućne pomoćnice</h2>
    <div class="button">
        <router-link to="/Oglasi">
        <button class="btn btn-primary">Prikaži sve oglase</button>
        </router-link>
    </div>
    <div class="divider"></div>
    <div class="button">
        <router-link to="/Pretraga">
        <button class="btn btn-primary">Napredno pretraživanje</button>
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
.Naslovna {
    width: fit-content;
    height: fit-content;
    background-color: rgba(128, 216, 236, 0.97);
}
     button {
     width: 390px;
     height: 60px;
     background-color: yellow;
     color: black;
     font-size: 130%;
    }
  h1{
      text-align: center;
      color: black;
      font-family: 'Times New Roman';
      font-size: 76px;
  }
   h2{
      text-align: center;
      color: black;
      font-family: 'Times New Roman';
      font-size: 42px;
  }
.navbar {
    background-color:rgba(128, 216, 236, 0.97);
   
}
.nav-link {
    color:black; 
    background-color: yellow;
    font-family: 'Times New Roman';
    font-weight: bold;
}
.divider{
    height: 50px;
}
</style>