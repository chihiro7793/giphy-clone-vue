<template>
  <div class="list">
    <gif-item
      @bookmark-item="onBookmarkGif"
      v-for="gif in giflist"
      :gif="gif"
      :key="gif.id"
    ></gif-item>
  </div>
</template>

<script>
import GifItem from './GifItem'
export default {
  props: ['giflist'],
  components: {
    GifItem
  },
  methods: {
    onBookmarkGif(id) {
      this.$emit('onbookmark', id)
    }
  }
}
</script>

<style>
.list {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
