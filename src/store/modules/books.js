export default {
  state: {
    booksList: [],
    booksListAux: [],
    bookDetails: {},
    showSpinner: false
  },

  getters: {
    booksList: (state) => state.booksList,

    booksListAux: (state) => state.booksListAux,

    bookDetails: (state) => state.bookDetails
  },

  mutations: {
    SET_BOOKS_LIST (state, books) {
      localStorage.setItem('booksList', JSON.stringify(books))
      state.booksList = books
    },

    SET_AUX_BOOKS_LIST (state, books) {
      localStorage.setItem('booksListAux', JSON.stringify(books))
      state.booksListAux = books
    },

    SET_SPINNER (state, status) {
      state.showSpinner = status
    },
  },

  actions: {
    async getAll ({ commit }) {
      try {
        commit('SET_SPINNER', true)
        const response = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Books')
        const data = await response.json()

        commit('SET_BOOKS_LIST', data)
        commit('SET_AUX_BOOKS_LIST', data)
        commit('SET_SPINNER', false)
      } catch (error) {
        console.log('catch', error)
      }
    },

    filterBooks ({ commit }, text) {
      const books = JSON.parse(localStorage.getItem('booksList'))
      const booksAux = [...books]

      const booksListAux = booksAux.filter(book => {
        return book.title.toLowerCase().includes(text.toLowerCase()) ||
          book.publishDate.toLowerCase().includes(text.toLowerCase())
      })

      commit('SET_AUX_BOOKS_LIST', booksListAux)
    }
  }
}
