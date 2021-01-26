<template>
  <div
    class="gif"
    :style="`background-image: url('${gif.images.fixed_width.url}')`"
  >
    <font-awesome-icon
      v-show="isbookmarked"
      icon="bookmark"
      class="bookmark"
      @click="bookmarkGifItem"
    />
    <font-awesome-icon
      v-show="!isbookmarked"
      :icon="['far', 'bookmark']"
      class="bookmark"
      @click="bookmarkGifItem"
    />
  </div>
</template>

<script>
export default {
  props: ['gif'],
  data() {
    return {
      url: '',
      isbookmarked: false
    }
  },
  methods: {
    bookmarkGifItem() {
      console.log(this.gif)
      this.isbookmarked = !this.isbookmarked
      this.$emit('bookmark-item', this.gif)
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
