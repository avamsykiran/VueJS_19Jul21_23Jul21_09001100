<template>
 <div class="container-fluid p-4">
    <h3>Employees List</h3>
 </div>
</template>

<script>
export default {
  name: 'EmpsList',
  computed:{
    emps(){
      return this.$store.state.empModule.emps;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
