<template>
<div class="rezultati"> 
  <p><a href="#" @click="odjava()">Izlazak iz aplikacije</a></p> 
<div>
    <h1>Rezultati pretrage</h1>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Servis: </th>
      <th scope="col">Županija: </th>
      <th scope="col">Grad: </th>
      <th scope="col">Radni dani: </th>
      <th scope="col">Cijena po satu: </th>
      <th scope="col">Opis oglasa: </th>
      </tr>
      </thead>
        <tbody>
    <tr v-for="o in oglasi" :key="o.servis">  
      <td>{{o.servis}}</td>
      <td>{{o.zupanija}}</td>
      <td>{{o.grad}}</td>
      <td>{{o.radnidani}}</td>
      <td>{{o.cijena}}</td>
      <td>{{o.opis}}</td>
    </tr>
  </tbody>
      </table>
  <div>
  </div>
  </div>
  </div>
</template>

<script>
import {firebase} from "@/firebase.js"
export default {
  name: "Rezultati",
  data: function() {
    return {
      oglasi:[]
      }
  },
 
  methods: {
    dohvati: function() {
   
      firebase.firestore().collection('oglas').where("grad", "==", this.$route.params.grad).where("dan","==", this.$route.params.dan).get()
        .then(querySnapshot => {
          const documents = querySnapshot.docs.map(doc => doc.data())
          console.log(documents)
          this.oglasi = documents
        
        })
    },
odjava: function () {
        firebase
        .auth().signOut().then(() => {
      });
    this.$router.replace({name: "Home"});
    },
  },
  mounted(){
    this.dohvati() 
  }
  
};
</script>