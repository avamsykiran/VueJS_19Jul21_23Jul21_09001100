<template>
  <tr>
    <td>{{ task.id }}</td>
    <td><input type="text" v-model="task.title" /></td>
    <td><input type="checkbox" v-model="task.isDone" /></td>
    <td>
      <button class="btn btn-sm btn-primary">SAVE</button>
      <button class="btn btn-sm btn-danger ml-2">CANCEL</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "EditTaskView",
  props:{
    task:Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
