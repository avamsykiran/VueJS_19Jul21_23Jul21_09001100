<template>
  <div id="taskListDiv" class="col-sm-8 mx-auto">
    <h3>{{ title }}</h3>

    <message-box v-if="msg">
      {{ msg }}
    </message-box>

    <add-task-view @addTask="add($event)" />

    <p v-if="tasks == null || tasks.length == 0" class="alert alert-info p-4">
      <strong>No Tasks To Display</strong>
    </p>

    <template v-else>
      <div class="p-2 text-center">
        <span class="badge badge-info p-2 mr-1"
          >Total: <strong>{{ tasks.length }}</strong></span
        >
        <span class="badge badge-secondary p-2 mr-1"
          >Completed: <strong>{{ doneCount }}</strong></span
        >
        <span class="badge badge-danger p-2 mr-1"
          >Pending: <strong>{{ pendingCount }}</strong></span
        >
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
          <template v-for="t in tasks" :key="t.id">
            <edit-task-view
              v-if="t.isEdit"
              :task="t"
              @save="doSave($event)"
              @cancelEdit="doCancelEdit($event)"
            />
            <task-view
              v-else
              :task="t"
              @delTask="del($event)"
              @editTask="edit($event)"
            />
          </template>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
import {
  getTasks,
  addTask,
  delTask,
  editTask,
  cancelEditTask,
  updateTask,
} from "../services/TasksService";
import TaskView from "./TaskView.vue";
import AddTaskView from "./AddTaskView.vue";
import EditTaskView from "./EditTaskView.vue";
import MessageBox from "./MessageBox.vue";

export default {
  name: "TasksList",
  components: {
    TaskView,
    AddTaskView,
    EditTaskView,
    MessageBox,
  },
  data() {
    return {
      title: "Task List",
      tasks: getTasks(),
      msg: null,
    };
  },
  computed: {
    doneCount() {
      return this.tasks.filter((t) => t.isDone).length;
    },
    pendingCount() {
      return this.tasks.filter((t) => !t.isDone).length;
    },
  },
  watch: {
    tasks(newVal, oldVal) {
      console.log(`Task chagned from ${oldVal} to ${newVal}`);
    },
  },
  methods: {
    add(taskTitle) {
      addTask(taskTitle);
      this.tasks = getTasks();
      this.msg = "A Task added successfully";
    },
    del(taskId) {
      delTask(taskId);
      this.tasks = getTasks();
      this.msg = `Task#${taskId} removed successfully`;
    },
    edit(taskId) {
      editTask(taskId);
      this.tasks = getTasks();
      this.msg = `Task#${taskId} marked as editable`;
    },
    doCancelEdit(taskId) {
      cancelEditTask(taskId);
      this.tasks = getTasks();
      this.msg = `Task#${taskId} marked as non-editable`;
    },
    doSave(task) {
      updateTask(task);
      this.tasks = getTasks();
      this.msg = `Task#${task.id} saved successfully`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
