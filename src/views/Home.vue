<template>
  <div class="home">
    <div>
      <h1>PRONAĐI KUĆNU POMOĆNICU</h1>
      <div>
        <div class="text">
          <router-link to="/Prijava">
          <button class="btn btn primary">
            <strong> Prijava</strong>
          </button></router-link>
          <div class="divider"/>
          <router-link to="/Registracija">
          <button class="btn btn primary">
            <strong> Registracija</strong>
          </button></router-link>
        </div>
        </div>
      </div>
  </div>
  
</template>
<script>
  export default {
    name: "Home",
  }; 
</script>

<style scoped>
.home {
  width: 1518px;
  height: 750px;
  background-color: aqua;
  background-attachment: fixed;
  border-radius: undefinedpx 0 0 0;
}
.divider {
  width: 140px;
  height: auto;
  display:-moz-inline-grid; 
}

  button {
    margin: 4px;
    width: 40%;
    border-radius: 20px;
    padding: 1% 5%;
    background-color:yellow;
    font-size: 150%;
    margin: 5%;
  }
h1 {
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 76px;
line-height: 112px;
align-items: center;
text-align: center;
color: #000405;
 }
 
</style>