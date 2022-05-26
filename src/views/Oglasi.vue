<template>
<div class="Oglasi">
     <div>
    <a href="#" @click="odjava()" class="nav-link">Odjava</a> </div> 
  <img src="@/assets/slika2.jpg" class="img-fluid">
  <h1>PRONAĐI KUĆNU POMOĆNICU</h1>
  <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col" v-for="o in oglasi" :key="o.id">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{o.servis}} </h5>
        <p class="card-text">ŽUPANIJA: {{o.zupanija}}</p>
        <p class="card-text">GRAD: {{o.grad}}</p>
        <p class="card-text">RADNI DANI: {{o.dan}}</p>
        <p class="card-text">CIJENA PO SATU/HRK: {{o.cijena}}</p>
        <p class="card-text">{{o.sadrzaj}}</p>
        <div class="button">
        <router-link to="/Unos_podataka">
        <button class="btn btn-primary">Naruči oglas</button></router-link>
    </div>
       </div>
    </div>
  </div>
  </div>
  <div class="divider"></div>
  <div class="button1">
        <router-link to="/Pretraga">
        <button class="btn btn-primary">Pretraži oglase</button>
        </router-link>
    </div>
</div>
</template>

<script>
import { firebase } from "@/firebase.js";

export default {
  data: function () {
    return {
      oglasi:[]
      }
  },
  methods: {
    odjava: function () {
        firebase
        .auth().signOut().then(() => {
      });
    this.$router.replace({name: "Home"});
    },
    
    dohvati: function() {
   
      firebase.firestore().collection('oglas').get().then(querySnapshot => {
          const documents = querySnapshot.docs.map(doc => doc.data())
          console.log(documents)
          this.oglasi = documents
        })
    }
  },
  mounted(){
    this.dohvati()
  }
};
</script>

<style scoped>
.Oglasi {
  width: fit-content;
  height: fit-content;
  background-color:rgba(128, 216, 236, 0.97);;
  background-attachment: fixed;
}
h1{
      text-align: center;
      color: black;
      font-family: 'Times New Roman';
      font-size: 76px;
  }
.card{
  background-color: rgba(91, 196, 219, 0.97);
  color:black;
  font-family: 'Times New Roman';
}
button{
   width: 150px;
   height: 37px;
   background-color: yellow;
   color: black;
   font-weight: bold;
   font-size: 105%;
}
.divider{
  height: 10px; 
}
.nav-link{
  background-color: yellow;
  color: black;
  font-family: 'Times New Roman';
  font-weight: bold;
}
.divider{
    height: 50px;
}
</style>