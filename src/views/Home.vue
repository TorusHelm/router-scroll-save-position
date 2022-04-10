<template>
  <div class="container">
    <div style="position: fixed; z-index: 1000; right: 0; top: 0;">{{ localStorage.getItem('postsScrollTop') }}</div>
    <div style="position: fixed; z-index: 1000; left: 0; top: 0;">{{ scrollPosition }}</div>
    <h1>Social post's</h1>
    <div class="posts-list">
      <article class="post" v-for="(post, id, index) in $store.state.posts" :key="'post' + index" :id="id">
        <router-link tag="div" :to="'/post/' + id" class="post__image" :id="id">
          <img :src="post.image">
        </router-link>
        <h2 class="post__title" v-if="post.title">{{ post.title }}</h2>
        <p class="post__text" v-if="post.text">{{ post.text }}</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      localStorage: localStorage,
      scrollPosition: 0,
    }
  },
  methods: {
    hetContainerScrollPosition() {
      let container = document.querySelector('html');
      return container.scrollTop;
    }
  },
  mounted() {
    setTimeout(() => {
      this.scrollPosition = this.hetContainerScrollPosition();
    }, 1000);
  }
}
</script>

<style>

</style>