<template>
  <div id="taskListDiv">
    <h3>{{ title }}</h3>
    <table>
      <thead>
          <tr>
            <th>Task#</th>
            <th>Title</th>
            <th>Completed?</th>
            <th>Actions</th>
          </tr>
      </thead>
      <tbody>
        <TaskView v-for="t in tasks" v-bind:key="t.id" v-bind:task="t"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import {getTasks} from '../services/TasksService'
import TaskView from './TaskView.vue'

export default {
  name: 'TasksList',
  components:{
    TaskView
  },
  data(){
    return {
      title:"Task List",
      tasks:getTasks()
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #taskListDiv{
   padding:5px;
   width: 50%; 
   margin:auto;
 }

 table{
   width:100%;
   border:1px solid black;
   padding:2px;
   border-radius: 20px;
 }
</style>
