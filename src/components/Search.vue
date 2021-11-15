<template>
    <section class="search">
      <h1 class="search__title">{{title}}</h1>
      <input type="search"
        name="search"
        class="search__input"
        placeholder="Search"
        v-model="search"
        @keyup="searchBooks($event)"
      />
      <i class="icon-search"></i>
    </section>
</template>

<script>
export default {
  name: 'Search',

  data () {
    return {
      title: "Search books",
      search: ''
    }
  },

  methods: {
    searchBooks: function(evt) {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
      this.timer = setTimeout(() => {
        this.$emit('filterBooks', evt.target.value)
      }, 800)
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  margin: 30px auto 60px;
  padding: 0;
  position: relative;
  width: 300px;

  &__title {
    font-weight: $font-weight-thin;
    text-align: center;
  }

  &__input {
    border: 2px solid $silver;
    border-radius: 3px;
    color: $silver;
    font-size: .9rem;
    padding: 5px 40px 5px 10px;
    width: 100%;
  }

  & .icon-search {
    bottom: 6px;
    position: absolute;
    right: 6px;
  }
}
</style>
