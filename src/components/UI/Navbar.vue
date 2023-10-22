<template>
  <div>
    <nav class="navbar">
      <div @click="$router.push('/')" style="cursor: pointer;">Posts</div>
      <div class="navbar__btns">
        <my-button @click="$router.push('/posts')">Posts</my-button>
        <my-button @click="$router.push('/about')" style="margin-left: 15px;">About us</my-button>
        <my-button @click="$router.push('/store')" style="margin-left: 15px;">Store</my-button>
      </div>
    </nav>
  </div>

</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
.navbar {
  height: 50px;
  color: white;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>