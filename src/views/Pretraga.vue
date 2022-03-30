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
            <div class="divider"></div>
        <h4>Odaberi grad</h4>
        <select v-model="grad" class="col-md-4">
            <option value="slavonskibrod">Slavonski Brod</option>
            <option value="osijek">Osijek</option>
            <option value="pozega">Požega</option>
            <option value="novagradiska">Nova Gradiška</option>
            <option value="dakovo">Đakovo</option>
        </select>
            <div class="divider"></div>
        <h4>Odaberi dan u tjednu</h4>
        <select v-model="dan" class="col-md-4">
            <option value="ponedjeljak">Ponedjeljak</option>
            <option value="utorak">Utorak</option>
            <option value="srijeda">Srijeda</option>
            <option value="cetvrtak">Četvrtak</option>
            <option value="petak">Petak</option>
            <option value="subota">Subota</option>
        </select>
        <div class="divider"></div>
        <button type="button" class="btn btn-primary">Prikaži dostupne oglase</button>
        <div class="divider"></div>
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

.divider{
    height: 25px;
}

.col-md-4{
    background-color: yellow;
    color:black;
    font-family: 'Times New Roman';
    font-weight: bold;
}

h4 {
    color:black; 
    font-family: 'Times New Roman';
    font-weight: bold;
}
.btn {
    background-color: yellow;
    font-family: 'Times New Roman';
    font-weight: bold;
    color:black;
}
</style>
