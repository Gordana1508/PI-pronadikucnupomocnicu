<template>
<div class ="Naslovna">
    <div>
<div id="nav">
    <nav class="navbar">
        <div class="containr">
            <p>
                <a href="#" @click="odjava()" class="nav-link">Odjava</a>
            </p>
        </div>
    </nav>
    <img src="@/assets/slika1.jpg" class="img-fluid">
    <h1>PRONAĐI KUĆNU POMOĆNICU</h1>
    <h2>Dobrodošli na aplikaciju za pronalazak kućne pomoćnice</h2>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toglle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> Odabir grada</button> 
    <ul class ="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item active" href="#">Slavonski Brod</a></li>
        <li><a class="dropdown-item" href="#">Osijek</a></li>
        <li><a class="dropdown-item" href="#">Karlovac</a></li>
        <li><a class="dropdown-item" href="#">Nova Gradiška</a></li>
        <li><a class="dropdown-item" href="#">Požega</a></li>
    </ul>
    </div>
     </div>
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
    width: 1518px;
    height: 750px;
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

.dropdown {

}
</style>