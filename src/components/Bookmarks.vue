<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h3>Bookmarked Gifs</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <gif-list @onbookmark="onbookmark" :giflist="bookmarks"></gif-list>
      </div>
    </div>
  </div>
</template>

<script>
import GifList from './GifList.vue'
export default {
  name: 'App',
  props: ['bookmarks'],
  components: {
    GifList
  },
  methods: {
    onbookmark(gif) {
      this.bookmarks.push(gif)
    }
  }
}
</script>
