<template>
  <div class="list">
    <gif-item
      v-for="gif in giflist"
      :gif="gif"
      :giflist="giflist"
      :key="gif.id"
      @gifs-fetched="onbookmark"
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
    onbookmark(gif) {
      let index = this.giflist.findIndex(element => element.id === gif.id)
      if (index !== -1) {
        this.giflist[index].isbookmarked = !this.giflist[index].isbookmarked
      }
      if (this.giflist[index].isbookmarked) {
        this.$store.state.bookmarks.push(gif)
      } else {
        let index = this.$store.state.bookmarks.findIndex(
          element => element.id === gif.id
        )
        if (index !== -1) {
          this.$store.state.bookmarks.splice(index, 1)
        }
      }
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
