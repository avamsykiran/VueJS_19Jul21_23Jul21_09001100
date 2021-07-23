<template>
  <tr>
    <td>{{ task.id }}</td>
    <td>{{ task.title }}</td>
    <td>{{ task.isDone }}</td>
    <td>
      <button>EDIT</button>
      <button>DELETE</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "TaskView",
  props:{
    task:Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
