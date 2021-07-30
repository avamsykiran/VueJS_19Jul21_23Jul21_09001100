<template>
  <div>
    <nav-bar :title="appTitle" />
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components:{
    NavBar
  },
  data(){
    return {
      appTitle:'Task Manager'
    }
  }
}
</script>

<style>
</style>
