<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
      <a href="#" class="navbar-brand">{{title}}</a>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props:{
    title:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
