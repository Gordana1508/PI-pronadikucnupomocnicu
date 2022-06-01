<template>
<div class="rezultati"> 
  <p><a href="#" @click="odjava()">Izlazak iz aplikacije</a></p> 
<div>  
      <h1>Rezultati</h1>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Servis</th>
      <th scope="col">Grad</th>
      <th scope="col">Dan</th>
      <th scope="col">Cijena</th>
      <th scope="col">Županija</th>
      <th scope="col">Sadržaj oglasa</th>
      </tr>
      </thead>
        <tbody>
    <tr v-for="o in oglasi" :key="o.servis">  
      <td>{{o.servis}}</td>
      <td>{{o.grad}}</td>
      <td>{{o.dan}}</td>
      <td>{{o.cijena}}</td>
      <td>{{o.zupanija}}</td>
      <td>{{o.sadrzaj}}</td>
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
   
      firebase.firestore().collection('oglas').where("dan", "==", this.$route.params.dan).where("grad","==", this.$route.params.grad)
        .get()
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
<style scoped>

.rezultati {
   width: fit-content;
  height: fit-content;
  background-color:rgba(128, 216, 236, 0.97);;
  background-attachment: fixed;
  border-radius: undefinedpx 0 0 0;
}

.nav-link {
  color:black;
  background-color: yellow;
  font-family: 'Times New Roman';
  font-weight: bold;
}

</style>