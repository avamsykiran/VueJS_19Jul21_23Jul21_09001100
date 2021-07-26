<template>
  <div class="p-2">
    <form @submit.prevent="addTask" class="form-inline">
      <label>Task Name
        <input type="text" v-model="taskName" class="form-control" required/>
      </label>
      <button class="btn btn-sm btn-secondary">ADD</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTaskView",
  data(){
    return {
      taskName:""
    }
  },
  methods:{
    addTask(){
      this.$emit("addTask",this.taskName);
      this.taskName="";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
