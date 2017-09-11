<template lang="pug">
header
  img(src="../assets/images/logo.png")
  h1 \{{ msg }}
  comp-a
  comp-b
  counter
    counter
</template>

<script>
import style from './styles/App.styl' // required for webpack, better for components

import CompA from './components/A.vue'
import CompB from './components/B.vue'
import Counter from './components/Counter.vue'

export default {
  data() {
    return {
      msg: 'Hello Vue!'
    }
  },

  components: {
    CompA,
    CompB,
    Counter
  }
}

console.log('hi, sourceMap')
</script>
