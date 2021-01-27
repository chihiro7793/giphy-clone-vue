<template>
  <div class="container">
    <ul class="nav nav-tabs">
      <router-link tag="li" to="/" active-class="active" exact>
        <a class="nav-link">Home</a>
      </router-link>
      <router-link tag="li" active-class="active" to="/bookmarks">
        <a class="nav-link">Bookmarks</a>
      </router-link>
    </ul>
  </div>
</template>

<style>
.nav-link {
  color: whitesmoke;
}
.active .nav-link {
  color: black;
}
</style>
