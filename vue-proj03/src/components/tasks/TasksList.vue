<template>
 <div class="container-fluid p-4">
    <h3>Tasks List</h3>
 </div>
</template>

<script>
export default {
  name: 'TasksList',
  computed:{
    tasks(){
      return this.$store.state.tasks;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
