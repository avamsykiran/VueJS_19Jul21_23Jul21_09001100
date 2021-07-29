import { createStore } from 'vuex'

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
            tasks: [
                { id: 1, title: "Create Product BackLog", isDone: true },
                { id: 2, title: "Create Scrum and Sprint Plans", isDone: true },
                { id: 3, title: "Create Sprint1 BackLog", isDone: false },
                { id: 4, title: "Create Sprint2 BackLog", isDone: false },
                { id: 5, title: "Create Sprint3 BackLog", isDone: false }
            ]
        }
    },
    mutations: {
        deleteTask(state,taskId){
            state.tasks = state.tasks.filter(t=>t.id!==taskId);
        },
        addTask(state,task){
            state.tasks=[...state.tasks,task];
        },
        updateTask(state,task){
            state.tasks=state.tasks.map(t=>t.id!==task.id?t:task);
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
    }
};

const store = createStore({
    modules:{
        empModule,taskModule
    }
})

export default store;