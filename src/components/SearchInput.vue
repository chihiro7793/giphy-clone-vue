<template>
  <input
    placeholder="Type and search for gifs"
    v-model="keyword"
    @input="onSearch"
  />
</template>

<script>
import { sliceArray } from '../functions/SliceArray'
import { BASE_URL, API_KEY } from '../config'
export default {
  data() {
    return {
      keyword: '',
      timeout: null
    }
  },
  methods: {
    onSearch() {
      if (this.keyword !== '') {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.makeAsearchCall()
        }, 700)
      } else {
        this.$store.state.slicedGifs = sliceArray(
          this.$store.state.trending,
          this.$store.state.currentPage,
          9
        )
      }
    },
    makeAsearchCall() {
      fetch(`${BASE_URL}/search?api_key=${API_KEY}&q=${this.keyword}&limit=`)
        .then(response => response.json())
        .then(result => {
          result.data.forEach(element => {
            element.isbookmarked = false
          })
          this.$store.state.gifs = result.data
          this.$store.state.slicedGifs = sliceArray(
            this.$store.state.gifs,
            this.$store.state.currentPage,
            9
          )
        })
    }
  }
}
</script>

<style>
input {
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 18px;
  border: 2px solid #5f5f5f;
  outline: 0;
  display: block;
  width: 100%;
  color: darkgray;
}

input:focus {
  border-color: #009ad7;
}
</style>
