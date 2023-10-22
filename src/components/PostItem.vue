<template>
  <div class="post">

    <div>
      <div class="post__item"><strong>Post id:</strong> {{ post.id }}</div>
      <div class="post__item"><strong>Article name:</strong> <br>{{ post.title }}</div>
      <div><strong>Article description:</strong> <br>{{ post.body }}</div>
      <div><strong>Likes quantity:</strong> {{ $store.state.likes }}</div>
    </div>

    <div class="post__btns">
      <my-button @click="$router.push(`/posts/${post.id}`)">Open</my-button>
      <my-button @click="$emit('remove', post)">Delete</my-button>
      <my-button @click="$store.commit('incrementLikes')">Like</my-button>
      <my-button @click="$store.commit('decrimentLikes')">Dislike</my-button>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  border: 2px solid teal;
  border-radius: 10px;
  padding: 15px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__item {
  margin-bottom: 15px;
}

.post__btns {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}



@media (max-width: 747px) {
  .post {
    flex-direction: column;
  }
  .post__btns {
    margin-left: 0;
    margin-top: 20px;
  }
}
</style>