<template>
 <div class="about">
 <h1>Pronađi kućnu pomoćnicu</h1>
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
        name: "Prijava", 
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

