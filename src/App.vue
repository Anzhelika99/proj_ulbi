<template>
  <navbar></navbar>
  <div class="app">
    <router-view></router-view>
  </div>
  
</template>

<script>

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.3s;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: #efefef;
}

.app {
  width: min(1200px, 80%);
  margin: 0 auto;
  padding: 20px;
}

@media (max-width: 747px) {
  .app {
    width: 100%;
  }
}

</style>