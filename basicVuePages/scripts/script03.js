
var tasks = [
    {id:1,title:"Create Product BakcLog",status:"Complete"},
    {id:2,title:"Create Scrum Plan",status:"Pending"},
    {id:3,title:"Create Sprint1 BakcLog",status:"Pending"},
    {id:4,title:"Create Sprint2 BakcLog",status:"Pending"},
    {id:5,title:"Create Sprint3 BakcLog",status:"Pending"}
];

Vue.component("app-root",{
    data:function(){ 
        return {tasks};
    },
    template: `
        <div>
            <app-header></app-header>
            <add-task></add-task>
            <task-list v-bind:taskList="tasks"></task-list>
        </div>
    `
});

Vue.component("app-header",{
    data: function(){ 
        return {title:"Task Manager" }
    },
    template: "<h1>{{title}}!</h1>"
});

Vue.component("add-task",{
    template: `
        <section>
            <h3>Add Task</h3>
            <form>
                <label>TaskId: <input type="number" /></label>
                <label>Title: <input type="text" /></label>
                <button>ADD</button>
            </form>
        </section>
    `
});

Vue.component("task-list",{
    props:["taskList"],
    template: `
        <section>
            <h3>Tasks</h3>
            <table>
                <thead>
                    <tr>
                        <th>Task#</th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="t in taskList" v-bind:key="t.id">
                        <td>{{t.id}}</td>
                        <td>{{t.title}}</td>
                        <td>{{t.status}}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    `
});


var app = new Vue({
    el:"#app",
    template:  "<app-root></app-root>"
});

