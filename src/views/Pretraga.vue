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
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="">
        Odaberite grad</button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item">Slavonski Brod</a></li>
            <li><a class="dropdown-item">Osijek</a></li>
            <li><a class="dropdown-item">Požega</a></li>
            <li><a class="dropdown-item">Nova Gradiška</a></li>
        </ul>
    </div>
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
  border-radius: undefinedpx 0 0 0;
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
