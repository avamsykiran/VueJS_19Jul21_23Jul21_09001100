<template>
  <tr>
    <td>{{ task.id }}</td>
    <td>{{ task.title }}</td>
    <td>{{ task.isDone }}</td>
    <td>
      <button class="btn btn-sm btn-primary">EDIT</button>
      <button @click="del" class="btn btn-sm btn-danger ml-2">DELETE</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "TaskView",
  props:{
    task:Object
  },
  methods:{
    del(){
      this.$emit("delTask",this.task.id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
