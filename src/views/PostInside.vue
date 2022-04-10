<template>
  <div class="container">
    <div style="position: fixed; z-index: 1000; right: 0; top: 0;">{{ localStorage.getItem('postsScrollTop') }}</div>
    <div style="position: fixed; z-index: 1000; left: 0; top: 0;">{{ scrollPosition }}</div>
    <div class="post-inside">
      Post inside
      <img :src="currentPost.image" class="post-inside__image">
      <div class="post-inside__title">{{ currentPost.title }}</div>
      <div class="post-inside__text">{{ currentPost.text }}</div>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post';
export default {
  name: 'Post-Inside',
  props: {
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      localStorage: localStorage
    }
  },
  computed: {
    currentPost() {
      return this.$store.state.posts[this.$route.params.id];
    },
    scrollPosition() {
      let container = document.querySelector('html');
      return container.scrollTop;
    }
  },
  components: {
    Post
  }
}
</script>