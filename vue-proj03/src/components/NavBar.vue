<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
       <router-link to="/" class="navbar-brand">{{title}}</router-link>

       <ul class="navbar-nav">
         <li class="nav-item">
           <router-link to="/" class="nav-link">Home</router-link>
         </li>
         <li class="nav-item">
           <router-link to="/emps" class="nav-link">Employees</router-link>
         </li>
         <li class="nav-item">
           <router-link to="/tasks" class="nav-link">Tasks</router-link>
         </li>
       </ul>
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
