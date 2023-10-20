<template>
  <div>
    <h1>Wellcome to my list of posts!</h1>
  </div>
  <div class="router__links">
    <router-link to="/posts">Posts</router-link>
    <router-link to="/about">About us</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 25px;
}
.router__links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.router__links a {
  color: #000;
}
</style>