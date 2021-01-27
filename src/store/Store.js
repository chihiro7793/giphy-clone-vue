import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        gifs: [],
        trending: [],
        currentPage: 0,
        slicedGifs: [],
        bookmarks: []
    }
});