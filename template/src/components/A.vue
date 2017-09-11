<template lang="pug">
.container
  h2.red \{{ msg }}
</template>

<script>
export default {
  data () {
    return {
      msg: 'component A'
    }
  }
}
</script>

<style lang="stylus">
.container
  border 1px solid #ccc
  margin 10px auto
  padding 0 10px
</style>