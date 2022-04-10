<template>
  <div class="post-inside">
    <img :src="post.image" class="post-inside__image">
    <div class="post-inside__title">{{ post.title }}</div>
    <div class="post-inside__text">{{ post.text }}</div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: null
  }
}
</script>
