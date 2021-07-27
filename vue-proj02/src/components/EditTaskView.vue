<template>
  <tr>
    <td>{{ t.id }}</td>
    <td><input type="text" v-model="t.title" class="form-control"/></td>
    <td><input type="checkbox" v-model="t.isDone" /></td>
    <td>
      <button class="btn btn-sm btn-primary" @click="save">SAVE</button>
      <button class="btn btn-sm btn-danger ml-2" @click="cancel">CANCEL</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "EditTaskView",
  data(){
    return {
      t:{}
    }
  },
  props:{
    task:Object
  },
  mounted(){
    this.t=this.task;
  },
  methods:{
    save(){
      this.$emit('save',this.t);
    },
    cancel(){
      this.$emit('cancelEdit',this.t.id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
