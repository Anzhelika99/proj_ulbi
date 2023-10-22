<template>
  <div>
    
    <h1>Page with my posts</h1>

    <my-input v-focus v-model="searchQuery" placeholder="Search..." />

    <div class="app__btns">
      <my-button @click="showDialog">Create post</my-button>

      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else style="margin-top: 15px">Getting posts... Please, wait</div>

    <div v-intersection="loadMorePosts" class="observer"></div>

    <!--<div class="page__wrapper">
      <div v-for="pageNumber in totalPages" :key="pageNumber" class="page" :class="{
        'current-page': pageNumber === page
      }" @click="changePage(pageNumber)">
        {{ pageNumber }}
      </div>
    </div>-->
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import axios from "axios";
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      page: 1,
      limit: 10,
      totalPages: 0,
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      searchQuery: "",
      sortOptions: [
        { value: "title", name: "Sort by title" },
        { value: "body", name: "Sort by description" },
        { value: "id", name: "Sort by id" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.unshift(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    //changePage(pageNumber) {
    //  this.page = pageNumber
    //},
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );

        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );

        this.posts = response.data;
      } catch (error) {
        alert(`Error ${error}`);
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {

      this.page += 1

      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );

        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );

        this.posts = [...this.posts, ...response.data];

      } catch (error) {

        alert(`Error ${error}`);

      } 
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        this.selectedSort === "id"
          ? post2[this.selectedSort] - post1[this.selectedSort]
          : post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    //page() {
    //  this.fetchPosts()
    //}
  }
};
</script>

<style>

.app__btns {
  display: flex;
  justify-content: space-between;

  margin-top: 15px;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid #252525;
  border-radius: 10px;
  padding: 10px;
}

.page:hover {
  cursor: pointer;
}

.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
}
</style>
