<template>
  <div class="container" id="home-container">
    <div class="row">
      <div class="col-md-12">
        <h3>Trending Gifs</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <search-input @gifs-fetched="onGifsSearch"></search-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <gif-list @onbookmark="onbookmark" :giflist="slicedGifs"></gif-list>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8">
        <div class="pagination">
          <button :disabled="currentPage === 0" @click="goToPreviousPage">
            Previous
          </button>
          <button
            :disabled="currentPage === Math.floor(gifs.length / 9)"
            @click="goToNextPage"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from './SearchInput.vue'
import GifList from './GifList.vue'

export default {
  name: 'App',
  props: ['bookmarks'],
  components: {
    SearchInput,
    GifList
  },
  data() {
    return {
      currentPage: 0,
      gifs: [],
      slicedGifs: []
    }
  },
  methods: {
    onGifsSearch(result) {
      this.gifs = result.data
      console.log(this.gifs.length)
      this.slicedGifs = this.gifs.slice(
        this.currentPage * 9,
        this.currentPage * 9 + 9
      )
    },
    goToNextPage() {
      this.currentPage += 1
      this.slicedGifs = this.gifs.slice(
        this.currentPage * 9,
        this.currentPage * 9 + 9
      )
    },
    goToPreviousPage() {
      this.currentPage -= 1
      this.slicedGifs = this.gifs.slice(
        this.currentPage * 9,
        this.currentPage * 9 + 9
      )
    },
    onbookmark(gif) {
      this.bookmarks.push(gif)
    }
  },
  mounted() {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=n7aovHfAyMyXnG3TPpBqIMHENiRFXuFd&limit=&rating=r`
    )
      .then(response => response.json())
      .then(result => {
        this.gifs = result.data
        console.log(this.gifs)
        this.slicedGifs = this.gifs.slice(
          this.currentPage * 9,
          this.currentPage * 9 + 9
        )
      })
  }
}
</script>
<style>
#home-container {
  margin-top: 20px;
}
button {
  background-color: rgb(40, 167, 69);
  margin-right: 10px;
  cursor: pointer;
  width: 80px;
  height: 40px;
  border: none;
  font-weight: 500;
  color: antiquewhite;
  border-radius: 5px;
}
button:hover {
  background-color: rgb(33, 146, 56);
}
button:disabled {
  background-color: lightgrey;
  color: darkgray;
  cursor: unset;
}
</style>
