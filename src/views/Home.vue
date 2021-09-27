<template>
  <div class="Home">
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

<style scoped>
template {
    background-color: aqua;
  }
  button {
    position: center;
    width: 422px;
    height: 61px;
    left: 560px;
    top: 421px;
    background-color: yellow;
  }

  .divider {
    width: 140px;
    height: auto;
    display: inline-block;
  }

</style>