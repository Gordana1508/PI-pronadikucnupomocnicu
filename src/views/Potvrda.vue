<template>
    <div class="Potvrda">
        <div id="nav">
    <nav class="navbar">
        <div class="containr">
            <p>
                <a href="#" @click="odjava()" class="nav-link">Odjava</a>
            </p>
        </div>
    </nav>
        </div>
    <img src="@/assets/slika2.jpg" class="img-fluid">
    <h1>PRONAĐI KUĆNU POMOĆNICU</h1>
     <div class="divider"></div>
    <h3>Kućna pomoćnica dolazi na Vašu adresu u odabranom terminu!</h3>
    <div class="divider"></div>
    <img src="@/assets/images.jpg" class="rounded">
    </div>
</template>

<script>
    export default {
        name: "Potvrda",
    };
</script>

<style scoped>
.Potvrda {
  width: 1518px;
  height: 750px;
  background-color:rgba(128, 216, 236, 0.97);
  background-attachment: fixed;
  border-radius: undefinedpx 0 0 0;
}
h1 {
  color:black;
  font-family: 'Times New Roman';
  font-size: 76px;
  text-align: center;
}
.nav-link {
  color:black;
  background-color: yellow;
  font-family: 'Times New Roman';
  font-weight: bold;
}
h3{
    color: black;
    font-family: 'Times New Roman';
    font-weight: bold;
}
.divider{
    height: 20px;
}
</style>
