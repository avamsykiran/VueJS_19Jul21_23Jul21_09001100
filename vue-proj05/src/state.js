import { createStore } from 'vuex'
import axios from 'axios';

const TASKS_API = "http://localhost:9999/tasks";

const empModule = {
    state() {
        return {
            emps: []
        }
    }
};

const taskModule = {
    state() {
        return {
            tasks: [],
            inProgress:false,
            err:null
        }
    },
    mutations: {
        setErrInTasks(state,err){
            state.err=err;
            state.inProgress=false;
        },
        waitForTasks(state){
            state.inProgress=true;
        },
        loadTasks(state,tasks){
            state.tasks=tasks;
            state.inProgress=false;
            state.err=null;
        },
        deleteTask(state,taskId){
            state.tasks = state.tasks.filter(t=>t.id!==taskId);
            state.inProgress=false;
            state.err=null;
        },
        addTask(state,task){
            state.tasks=[...state.tasks,task];
            state.inProgress=false;
            state.err=null;
        },
        updateTask(state,task){
            state.tasks=state.tasks.map(t=>t.id!==task.id?t:task);
            state.inProgress=false;
            state.err=null;
        }
    },
    getters:{
        tasksDone(state){
            return state.tasks.filter(t=>t.isDone).length;
        },
        tasksNotDone(state){
            return state.tasks.filter(t=>!t.isDone).length;
        },
        taskById(state){
            return id => state.tasks.find(t=>t.id===id);
        }
    },
    actions:{
        getAllTasks(context){
            context.commit('waitForTasks');
            axios.get(TASKS_API).then(
                (res)=> context.commit('loadTasks',res.data),
                (err)=>{
                    console.log(err); 
                    context.commit('setErrInTasks',"Unable to laod tasks");
                }
            );
        },
        addTask(context,payload){
            context.commit('waitForTasks');
            axios.post(TASKS_API,payload.task).then(
                (res)=> context.commit('addTask',res.data),
                (err)=>{
                    console.log(err); 
                    context.commit('setErrInTasks',"Unable to add task");
                }
            );
        },
        updateTask(context,payload){
            context.commit('waitForTasks');
            axios.put(`${TASKS_API}/${payload.task.id}`,payload.task).then(
                (res)=> context.commit('updateTask',res.data),
                (err)=>{
                    console.log(err); 
                    context.commit('setErrInTasks',"Unable to update task");
                }
            );
        },
        deleteTask(context,payload){
            context.commit('waitForTasks');
            axios.delete(`${TASKS_API}/${payload.id}`).then(
                ()=> context.commit('deleteTask',payload.id),
                (err)=>{
                    console.log(err); 
                    context.commit('setErrInTasks',"Unable to delete task");
                }
            );
        }
    }
};

const store = createStore({
    modules:{
        empModule,taskModule
    }
})

export default store;