<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

import { firebase } from "@/firebase.js"; 

firebase.auth().onAuthStateChanged((user) =>
{
  if (user){
    console.log('*** User',user.email);
    store.currentUser=user.email; 
  }
  else {
    console.log('*** No User');
    store.currentUser=null;

    if (router.name !== 'Prijava'){
      router.push({name: 'Prijava'});
    }
  } 
});


</script> 



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
