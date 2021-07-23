<template>
  <div class="hello">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data(){
    return {
      title:"Task Manager"
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 h1{
   border-bottom: 1.5px solid #000000;
 }
</style>
