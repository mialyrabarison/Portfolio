<template>
  <!-- Si on veut que toute les pages ont header et footer fixe, dia atsoina rehefa avy manao importation  -->
  <HeaderComponent></HeaderComponent>
  <router-view></router-view><!-- ETO NY CONTENUE AN PAGE selon router -->
</template>

<script>
import HeaderComponent from './components/header/Header-component.vue';


export default {
  name: 'App',
  components: { HeaderComponent 
    
  }
}
</script>

<style src="./assets/css/style.css">

</style>
