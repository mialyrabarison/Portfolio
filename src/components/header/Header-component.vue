<template>
  <div class="navbar">
    <div class="logo">
      <!-- revenir en haut de la page page "/" -->
        <a href="#home"> 
          <img :src="require('@/assets/image/LOGO MIALY-1.png')" alt="HTML-CSS" />
        </a>
    </div>
    <!-- pour afficher le menu en mode mobile -->
    <span class="material-symbols-outlined burger" @click="toggleMenu"> menu </span>
    <div class="menu" :class="{open:isMenuOpen}" >
      <a href="/">Home</a>

      <a href="about">About</a>

      <a href="skills">Skills</a>

      <a href="contact">Contact</a>
    </div>
  </div>
</template>
<!-- scoped : propre au composant -->
<style  scoped src="./header.css"></style>  
<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>