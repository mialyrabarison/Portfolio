<template>
  <footer class="footer">
    <div class="social_media">
      <a class="logo" href="https://www.linkedin.com/" target="_blank"
        ><img :src="require('@/assets/icons/linkedin.png')"
      /></a>
      <a class="logo" href="https://instagram.com/" target="_blank"
        ><img :src="require('@/assets/icons/instagram.png')"
      /></a>
      <a class="logo" href="https://github.com/" target="_blank"
        ><img :src="require('@/assets/icons/github.png')"
      /></a>
    </div>
    <div class="datetime">
      <small
        >Dernière mise à jour le
        <time datetime="2025-22-01">22 january 2025</time>
      </small>
    </div>
  </footer>
</template>
<style scoped src="./footer.css"></style>
