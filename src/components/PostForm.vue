<template>
  <form @submit.prevent>

    <h4>Create post</h4>

    <my-input
      v-model="post.title"
      v-focus
      type="text"
      placeholder="Article name"
    />

    <my-input
      v-model="post.body"
      type="text"
      placeholder="Article description"
    />

    <my-button @click="createPost" style="margin-top: 15px; "> Create! </my-button>
    
  </form>
</template>

<script>

export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}

</style>
