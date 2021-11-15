<template>
  <div id="app">
    <main>
      <Spinner v-if="showSpinner"></Spinner>
      <Search @filterBooks="filterBooks"></Search>
      <router-view />
    </main>
  </div>
</template>

<script>
import Spinner from './components/Spinner.vue'
import Search from './components/Search.vue'

export default {
  name: 'app',

  components: {
    Spinner,
    Search
  },

  computed: {
    showSpinner() {
      return this.$store.state.showSpinner
    }
  },

  methods: {
    filterBooks(query) {
      this.$store.dispatch('filterBooks', query)
    }
  }
}
</script>
