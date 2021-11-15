<template>
  <div v-if="booksList.length > 0">
    <transition-group name="books__content" tag="div" class="books">
      <div
        v-for="book in booksList"
        :key="book.id"
        class="books__content"
      >
        <div class="books__item books__item--title">{{book.title}}</div>
        <div class="books__item">{{book.description}}</div>
        <div class="books__item">
          Published date: {{book.publishDate | formatDate}}
        </div>
      </div>
    </transition-group>

    <div v-if="booksList.length === 0" class="no-results">
      <p class="no-results__msg">No results found</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Books',

  props: {
    booksList: Array,
  },

  data () {
    return {};
  },

  filters: {
    formatDate (date) {
      const finalDate = date.split('T');
      return finalDate[0].toLocaleString('%d-%b-%Y')
    },
  },
}
</script>

<style lang="scss" scoped>
.books {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;

  &__content {
    border: 2px solid $silver;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    padding: 10px 10px 40px;
    position: relative;
    margin: 0 30px 50px;
    width: 300px;

    &-move {
      transition: all 600ms ease-in-out 50ms
    }

    &-enter-active {
      transition: all 300ms ease-out
    }

    &-leave-active {
      transition: all 200ms ease-in;
      position: absolute;
      z-index: 0;
    }

    &-enter,
    &-leave-to {
      opacity: 0
    }

    &-enter {
      transform: scale(0.9)
    }
  }

  &__item {
    font-size: .9rem;
    margin-bottom: 10px;

    &--title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
}

.no-results {
  margin: 0 auto;
  text-align: center;
  width: 100%;

  &__msg {
    font-size: 2rem;
    font-weight: $font-weight-thin;
  }
}
</style>
