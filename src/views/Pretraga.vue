<template>
    <div class="Pretraga">
        <div id="nav">
    <nav class="navbar">
        <div class="containr">
            <p>
                <a href="#" @click="odjava()" class="nav-link">Odjava</a>
            </p>
        </div>
    </nav>
        </div>
        <img src="@/assets/slika1.jpg" class="img-fluid">
        <h1>PRONAĐI KUĆNU POMOĆNICU</h1>
        <div>
        <select v-model="grad" class="col-md-4" aria-label="Odaberi grad">
            <option selected>Odaberi grad</option>
            <option value="slavonskibrod">Slavonski Brod</option>
            <option value="osijek">Osijek</option>
            <option value="pozega">Požega</option>
            <option value="novagradiska">Nova Gradiška</option>
            <option value="dakovo">Đakovo</option>
        </select>
        </div>
        <img src="@/assets/slika3.jpg" class="img-fluid">
    </div>
</template>

<script>
export default {
    name: "Pretraga", 
};
</script>

<style scoped>
.Pretraga {
  width: fit-content;
  height: fit-content;
  background-color:rgba(128, 216, 236, 0.97);;
  background-attachment: fixed;

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


</style>
