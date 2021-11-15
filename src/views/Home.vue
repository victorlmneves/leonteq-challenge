<template>
  <BooksList :booksList="booksListAux" />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BooksList from '@/components/BooksList.vue'

export default {
  name: 'App',

  components: {
    BooksList
  },

  computed: {
    ...mapGetters(['booksListAux'])
  },

  created () {
    this.getAll()
  },

  methods: {
    ...mapActions(['getAll'])
  }
}
</script>
