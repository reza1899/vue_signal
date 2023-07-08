<template>
  <router-view/>
</template>

<style>
@font-face {
    font-family: 'Vazir';
    src: url('../public/fonts/Vazir.eot');
    src: url('../public/fonts/Vazir.eot?#iefix') format('embedded-opentype'),
    url('../public/fonts/Vazir.woff2') format('woff2'),
    url('../public/fonts/Vazir.woff') format('woff'),
    url('../public/fonts/Vazir.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
