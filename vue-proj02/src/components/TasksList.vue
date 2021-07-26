<template>
  <div id="taskListDiv" class="col-sm-8 mx-auto">
    <h3>{{ title }}</h3>

    <add-task-view @addTask="add($event)" />

    <p v-if="tasks==null || tasks.length==0" class="alert alert-info p-4">
      <strong>No Tasks To Display</strong>
    </p>

    <table v-else class="table table-striped table-border table-hover">
      <thead>
          <tr>
            <th>Task#</th>
            <th>Title</th>
            <th>Completed?</th>
            <th>Actions</th>
          </tr>
      </thead>
      <tbody>
        <TaskView v-for="t in tasks" :key="t.id" :task="t" @delTask="del($event)"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import {getTasks,addTask,delTask} from '../services/TasksService'
import TaskView from './TaskView.vue'
import AddTaskView from './AddTaskView.vue'

export default {
  name: 'TasksList',
  components:{
    TaskView,AddTaskView
  },
  data(){
    return {
      title:"Task List",
      tasks:getTasks()
    } 
  },
  methods:{
    add(taskTitle){
      addTask(taskTitle);
      this.tasks=getTasks();
    },
    del(taskId){
      delTask(taskId);
      this.tasks=getTasks();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
