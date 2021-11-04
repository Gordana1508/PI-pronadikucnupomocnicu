<template>
 <div class="prijava">
 <img src="@/assets/slika2.jpg" class="img-fluid">
 <h1>PRONAĐI KUĆNU POMOĆNICU</h1>
 <div class="container">
 <div class="row">
 <div class="col-sm"></div>
 <div class="col-sm">
 <form>
 <div class="form-group">
 <label for="exampleInputEmail1">E-mail:</label>
 <input 
 v-model="email" type="email" class="form-control"
id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="tvoj.mail@gmail.com" />
 </div>
 <div class="form-group">
 <label for="exampleInputPassword1">Lozinka:</label>
 <input 
 v-model="lozinka" type="password" class="form-control"
id="exampleInputPassword1" placeholder="tvojalozinka" />
 </div>
 <button type="button" @click="Prijava()" class="btn btn-primary">Prijavi se</button>
 </form>
 </div>
 <div class="col-sm"></div>
 </div>
 </div>
 </div>
</template>

<script>
    import { firebase } from "@/firebase.js";
    export default {
        name: "prijava", 
        data(){
            return {
                email:"",
                lozinka:"",
            }
        },
        methods: {
            Prijava:function(){
                console.log ("Registracija..." + this.email)

                firebase.auth().signInWithEmailAndPassword(this.email, this.lozinka)
                .then((result) => {
                    console.log("Uspješna prijava", result);

                    this.$router.replace({name: "Naslovna"});
                })
                .catch(function(err){
                    console.error("Greška", err)
                });
            },
        },
    };
</script>
<style scoped>
.prijava{
  width: 1518px;
  height: 750px;
  background-color: rgba(128, 216, 236, 0.97);
  background-attachment: fixed;
  border-radius: undefinedpx 0 0 0;
}
 button{
     width: 370px;
     height: 50px;
      background-color: yellow;
      color: black;
      font-weight: bold;
      font-size: 136%;
  }
 
 h1{
      text-align: center;
      color: black;
      font-family: 'Times New Roman';
      font-size: 76px;
  }
</style>
