<template>
  <div class="home">
    <div>
      <img src="@/assets/slika2.jpg" class="img-fluid">
      <h1>PRONAĐI KUĆNU POMOĆNICU</h1>
      <div>
        <div class="button">
          <router-link to="/Prijava">
          <button class="btn btn primary">
            <strong> Prijava</strong>
          </button></router-link>
          <div class="divider"></div>
          <router-link to="/Registracija">
          <button class="btn btn primary">
            <strong> Registracija</strong>
          </button></router-link>
        </div>
        </div>
      </div>
    <h2>PRONAĐI KUĆNU POMOĆNICU 2021./2022.</h2>
  </div>
  
</template>
<script>
  export default {
    name: "Home",
  }; 
</script>

<style scoped>

.home {
  width: fit-content;
  height: fit-content;
  background-color:rgba(128, 216, 236, 0.97);
  background-attachment: fixed;
  border-radius: undefinedpx 0 0 0;
}
div {
  text-align: center;
}
.divider {
  width: 70px;
}
button {
  align-content: center;
  margin: 4px;
  width: 40%;
  border-radius: 20px;
  padding: 1% 5%;
  background-color:yellow;
  font-size: 150%;
  margin: 5%;
  color: black;
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
  font-family: 'Times new roman';
  font-size: 13px;
}
 
</style>