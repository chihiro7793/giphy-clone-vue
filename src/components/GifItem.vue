<template>
  <div
    class="gif"
    :style="`background-image: url('${gif.images.fixed_width.url}')`"
  >
    <font-awesome-icon
      v-show="this.gif.isbookmarked"
      icon="bookmark"
      class="bookmark"
      @click="bookmarkThisGif"
    />
    <font-awesome-icon
      v-show="!this.gif.isbookmarked"
      :icon="['far', 'bookmark']"
      class="bookmark"
      @click="bookmarkThisGif"
    />
  </div>
</template>

<script>
export default {
  props: ['gif', 'giflist'],
  data() {
    return {
      url: ''
    }
  },
  methods: {
    bookmarkThisGif() {
      let index = this.giflist.findIndex(element => element.id === this.gif.id)
      if (index !== -1) {
        this.giflist[index].isbookmarked = !this.giflist[index].isbookmarked
      }
      if (this.giflist[index].isbookmarked) {
        this.$store.state.bookmarks.push(this.gif)
      } else {
        let index = this.$store.state.bookmarks.findIndex(
          element => element.id === this.gif.id
        )
        if (index !== -1) {
          this.$store.state.bookmarks.splice(index, 1)
        }
      }
    }
  }
}
</script>

<style scoped>
.gif {
  width: 240px;
  height: 240px;
  margin-bottom: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.bookmark {
  color: whitesmoke;
  position: relative;
  bottom: 220px;
  left: 100px;
}
</style>
