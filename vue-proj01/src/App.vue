<template>
  <div>
    <AppHeader />
    <TasksList />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import TasksList from "./components/TasksList.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    TasksList,
  },
};
</script>

<style>
</style>
