<template>
    <div class="registracija">
    <img src="@/assets/slika2.jpg" class="img-fluid">
    <h1>PRONAĐI KUĆNU POMOĆNICU</h1>
    <div class="container">
    <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">
    <form>
        <div class="form-group">
        <label for="exampleInputEmail1">Ime i prezime:</label>
        <input v-model="imeiprezime" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ime prezime" />
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">E-mail:</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="tvoj.mail@gmail.com" />
        </div>
        <div class="form-group">
        <label for="exampleInputPassword1">Lozinka:</label>
        <input v-model="lozinka" type="password" class="form-control" id="exampleInputPassword1" placeholder="tvojalozinka" />
        </div>
            <button type="button" @click="registracija ()" class="btn btn-dark btn-lg btn-block">Registriraj se<router-link to="Prijava"></router-link></button>
    </form>
    </div>
        <div class="col-sm"></div>
    </div>
    </div>
    </div>
    </template>

<script>

    import {firebase} from "@/firebase.js";

    export default {
        data: function () {
            return {
                imeiprezime: "",
                email: "",
                lozinka: "",
            };
        },

        methods: {
            registracija: function () {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.lozinka) 
                .then(function() {
                    console.log ("Uspješna registracija!");
                    alert("Uspješna registracija!")
                    this.$router.replace({name: "Oglasi"});
                });
            },
        },
    };

</script>

<style scoped>
.registracija{
  width: 1518px;
  height: 750px;
  background-color:rgba(128, 216, 236, 0.97);
  background-attachment: fixed;
  border-radius: undefinedpx 0 0 0;
}
button{
  background-color: yellow;
  color: black;
  font-weight: bold;
  }
h1{
   text-align: center;
   color: black;
   font-family: 'Times New Roman';
   font-size: 76px;
}
 
</style>