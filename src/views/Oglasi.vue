<template>
<div class="Oglasi">
  <div id="nav">
    <nav class="navbar">
        <div class="containr">
            <p>
                <a href="#" @click="odjava()" class="nav-link">Odjava</a>
            </p>
        </div>
    </nav>
  </div>
  <h1>PRONAĐI KUĆNU POMOĆNICU</h1>

    <div class="card">
      <div class="card-header">Servis za čišćenje Eco-clean </div>
      <div class="card-body">
        <h5 class="card-title">Nudimo usluge čišćenja</h5>
        <p class="card-text">Nudimo usluge čišćenja BPŽ</p>
        <button class="btn btn-lg">Odaberi oglas</button>
      </div>
    </div>

    <div class="divider"></div>

     <div class="card">
      <div class="card-header">Servis za čišćenje Clean d.o.o.</div>
      <div class="card-body">
        <h5 class="card-title">Nudimo usluge čišćenja</h5>
        <p class="card-text">Nudimo usluge čišćenja KŽ</p>
        <button class="btn btn-lg">Odaberi oglas</button>
      </div>
     </div>

     <div class="divider"></div>

     <div class="card">
      <div class="card-header">Servis za čišćenje Topić-čišćenje</div>
      <div class="card-body">
        <h5 class="card-title">Nudimo usluge čišćenja</h5>
        <p class="card-text">Nudimo usluge čišćenja BPŽ</p>
        <button class="btn btn-lg">Odaberi oglas</button>
      </div>
     </div>

     <div class="divider"></div>

     <div class="card">
      <div class="card-header">Servis za čišćenje Baka Mara</div>
      <div class="card-body">
        <h5 class="card-title">Nudimo usluge čišćenja</h5>
        <p class="card-text">Nudimo usluge čišćenja KŽ</p>
        <button class="btn btn-lg">Odaberi oglas</button>
      </div>
     </div>
</div>
</template>
<script>
  export default {
    name: "Oglasi",
  }; 
</script>

<style scoped>
.Oglasi {
  width: 1518px;
  height: 750px;
  background-color:rgba(128, 216, 236, 0.97);;
  background-attachment: fixed;
  border-radius: undefinedpx 0 0 0;
}

h1{
      text-align: center;
      color: black;
      font-family: 'Times New Roman';
      font-size: 76px;
  }
.card{
  background-color: rgba(91, 196, 219, 0.97);
  color:black;
  font-family: 'Times New Roman';
}
button{
   width: 150px;
   height: 37px;
   background-color: yellow;
   color: black;
   font-weight: bold;
   font-size: 105%;
}
.divider{
  height: 10px; 
}
.nav-link{
  background-color: yellow;
  color: black;
  font-family: 'Times New Roman';
  font-weight: bold;
}

</style>