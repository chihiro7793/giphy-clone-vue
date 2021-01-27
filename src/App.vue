<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <app-header></app-header>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    appHeader: Header
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  padding: 50px;
  color: whitesmoke;
  background-color: black;
}
</style>
