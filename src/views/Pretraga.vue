<template>
  
<div class="pretraga"> 
    <div>
      <a href="#" @click="odjava()">Odjava</a> 
      <h1>Pretraga oglasa</h1>
      </div>
    
    
    <div style="width:50%; margin:0 auto;">   
        <h2>Odaberi dan u tjednu</h2>
        <select v-model="dan" class="form-control" placeholder="Odaberi dan" aria-label= "Username">
            <option value="Ponedjeljak">Ponedjeljak</option>
            <option value="Utorak">Utorak</option>
            <option value="Srijeda">Srijeda</option>
            <option value="Četvrtak">Četvrtak</option>
            <option value="Petak">Petak</option>
            <option value="Subota">Subota</option>
            <option value="Nedjelja">Nedjelja</option>
      </select>
 <div class="divider"></div>
      <div class= "input-group mb-3">
        <input v-model="zupanija" type="text" class="form-control" placeholder="Upiši županiju" aria-label="Username">
      </div>
      <div class="input-group mb-3">
        <input v-model="grad" type="text" class="form-control" placeholder="Upiši grad" aria-label="Username">
    </div>

          <div class="row align-items-center">
        <div class="button">
            <router-link to="/Oglasi"
              ><button class="btn btn primary">
                <strong>Povratak na oglase</strong>
              </button></router-link
            >
            <router-link :to="{name: 'Rezultati', params: {dan: dan, zupanija: zupanija, grad: grad} }"
              ><button class="btn btn primary">

                <strong>Pretraži</strong>   
    
              </button></router-link
                >
              </div>
        </div>
    </div>  
</div>
</template>

<script>
import { firebase } from "@/firebase.js";
export default {
  data: function () {
      return {
          dan:"",
          zupanija:"",
          grad:""
      }
  },
  methods: {
    odjava: function () {
        firebase
        .auth().signOut().then(() => {
      });
    this.$router.replace({name: "Home"});
    },
    
  },
};
</script>

<style scoped>
.pretraga {
  background-color:rgba(128, 216, 236, 0.97);;
  background-attachment: fixed;
  width: 1518px;
  height: 750px;

}

h1 {
    color:black;
    font-family: 'Times New Roman';
    font-size: 76px;
    text-align: center;
}

.nav-link {
  background-color: yellow;
  color: black;
  font-family: 'Times New Roman';
  font-weight: bold;
}

.button {
    background-color: yellow;
    color:black;
    font-family: 'Times New Roman';
    font-weight: bold;
}

.divider{
    height: 25px;
}

.col-md-4{
    background-color: yellow;
    color:black;
    font-family: 'Times New Roman';
    font-weight: bold;
}

h4 {
    color:black; 
    font-family: 'Times New Roman';
    font-weight: bold;
}
.btn {
    background-color: yellow;
    font-family: 'Times New Roman';
    font-weight: bold;
    color:black;
}
</style>