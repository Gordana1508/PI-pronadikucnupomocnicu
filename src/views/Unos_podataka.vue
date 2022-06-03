<template>
    <div class="Unospodataka">
                <a href="#" @click="odjava()" class="nav-link">Odjava</a>
   <img src="@/assets/slika2.jpg" class="img-fluid">
        <h1>PRONAĐI KUĆNU POMOĆNICU</h1>
    <form class="row g-3">
  <div class="col-md-9">
    <label for="imeiprezime" class="form-label">Ime i prezime </label>
    <input type="text" class="form-control" id="" placeholder="Upišite ime i prezime">
  </div>
  <div class="col-md-9">
    <label for="adresa" class="form-label">Adresa </label>
    <input type="text" class="form-control" id="" placeholder="Upišite Vašu adresu">
  </div>
  <div class="col-md-9">
    <label for="vrijeme" class="form-label">Vrijeme dolaska </label>
    <input type="text" class="form-control" id="" placeholder="Upišite željeno vrijeme">
  </div>
</form>
<div class="divider"></div>
 <div class="button">
   <router-link to="/Potvrda">
   <button class="btn btn-primary">Naruči kućnu pomoćnicu</button>
   </router-link>
    </div>
</div>
</template>

<script>
    export default {
        name: 'Unospodataka'
    }; 
</script>

<style scoped>
  .Unospodataka {
  width: 1518px;
  height: 750px;
  background-color:rgba(128, 216, 236, 0.97);;
  background-attachment: fixed;
  border-radius: undefinedpx 0 0 0;
}

h1 {
    text-align: center;
    color: black;
    font-family: 'Times New Roman';
    font-size: 76px;
}
.nav-link {
  color:black;
  background-color: yellow;
  font-family: 'Times New Roman';
  font-weight: bold;
  text-align: center;
}
.btn {
  color:black;
  background-color: yellow;
  font-family: 'Times New Roman';
  font-weight: bold;
}
.divider{
  height: 60px;
}
.form-label {
  color:black;
}

</style>
