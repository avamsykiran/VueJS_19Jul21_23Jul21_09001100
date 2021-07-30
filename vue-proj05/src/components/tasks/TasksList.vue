<template>
 <div class="container-fluid p-4">
    <h3>Tasks List</h3>
    <p v-if="errMsg">
      <strong>{{errMsg}}</strong>
    </p>
    
    <p v-if="shouldWait">
      <strong>Please wait while loading</strong>
    </p>

    <p v-if="!tasks || tasks.length==0">
      <strong>No tasks to dsplay</strong>
    </p>
    <template v-else>
      <div class="p-2 text-center">
        <span class="badge badge-info p-2 mr-1">Total: <strong>{{ tasks.length }}</strong></span>
        <span class="badge badge-secondary p-2 mr-1">Completed: <strong>{{ doneCount }}</strong></span>
        <span class="badge badge-danger p-2 mr-1">Pending: <strong>{{ pendingCount }}</strong></span>
      </div>

      <table class="table table-striped table-border table-hover">
        <thead>
          <tr>
            <th>Task#</th>
            <th>Title</th>
            <th>Completed?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in tasks" :key="t.id">
            <td>{{t.id}}</td>
            <td>{{t.title}}</td>
            <td>{{t.isDone}}</td>
            <td>
              <router-link :to="`/edittask/${t.id}`" class="btn btn-sm btn-primary mr-1">EDIT</router-link>
              <button class="btn btn-sm btn-danger mr-1" @click="del(t.id)">DELETE</button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
 </div>
</template>

<script>
export default {
  name: 'TasksList',
  computed:{
    errMsg(){
      return this.$store.state.taskModule.err;
    },
    shouldWait(){
      return this.$store.state.taskModule.inProgress;
    },
    tasks(){
      return this.$store.state.taskModule.tasks;
    },
    doneCount(){
      return this.$store.getters.tasksDone;
    },
    pendingCount(){
      return this.$store.getters.tasksNotDone;
    }
  },
  methods:{
    del(taskId){
      this.$store.dispatch({type:'deleteTask',id:taskId});
    }
  },
  mounted(){
    this.$store.dispatch({type:'getAllTasks'});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
