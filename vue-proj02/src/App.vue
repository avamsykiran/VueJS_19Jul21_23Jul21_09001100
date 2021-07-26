<template>
  <div>
    <nav-bar :title="appTitle" />
    <min class="container-fluid p-2">
      <tasks-list />
    </min>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import TasksList from './components/TasksList.vue'

export default {
  name: 'App',
  data(){
    return {
      appTitle:"TaskManager"
    }
  },
  components:{
    NavBar,TasksList
  }
}
</script>

<style scoped>

</style>