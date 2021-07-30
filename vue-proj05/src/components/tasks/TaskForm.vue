<template>
  <div class="container-fluid p-4">
    <div class="col-sm-4 mx-auto">
      <h3>{{isEdit?"Edit":"New"}} Task</h3>
      <form class="form" @submit.prevent="save">
        <div class="form-group">
          <label>Task Id</label>
          <input
            type="number"
            class="form-control"
            v-model="task.id"
            :readonly="isEdit"
            required
          />
        </div>
        <div class="form-group">
          <label>Title</label>
          <input
            type="text"
            class="form-control"
            v-model="task.title"
            required
          />
        </div>
        <div class="form-group">
          <div class="form-check">
            <label class="form-check-label">
              <input
                type="checkbox"
                class="form-check-input"
                v-model="task.isDone"
              />
              Is Task Completed
            </label>
          </div>
        </div>
        <button class="btn btn-primary btn-block"> SAVE TASK </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskForm",
  data() {
    return {
      task: {},
      isEdit:false
    };
  },
  mounted(){
    let id = this.$route.params.id;
    if(id){
      this.isEdit=true;
      this.task = this.$store.getters.taskById(parseInt(id));
    }
  },
  methods:{
    save(){
      if(!this.task.isDone) this.task.isDone=false;
      if(!this.isEdit)
        this.$store.dispatch({type:'addTask',task:this.task});
      else
        this.$store.dispatch({type:'updateTask',task:this.task});
      this.$router.push('/tasks')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
