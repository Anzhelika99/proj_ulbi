<template>
  
  <div class="posts" v-show="posts.length">

    <h2>List of all posts</h2>

    <transition-group name="post-list">
      <post-item 
      v-for="post in posts" 
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"/>
    </transition-group>

  </div>

  <h2 v-show="posts.length === 0" style="color: red; margin-top: 20px;">No more posts :(</h2>

</template>

<script>
import PostItem from './PostItem.vue';

export default {
  emits: ['remove'],
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.posts {
  margin-top: 20px;
}

h2 {
  font-size: 20px;
}

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active  {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(120px);
}
</style>