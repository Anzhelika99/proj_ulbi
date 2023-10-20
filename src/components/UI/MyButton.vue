<template>
  <button class="btn">
    <slot></slot>
    
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: teal;
  color: #fff;
  border-radius: 10px;
  border: 1px solid teal;
}
.btn:hover {
  background: #fff;
  color: #000;
  border: 1px solid teal;
  cursor: pointer;
}
</style>