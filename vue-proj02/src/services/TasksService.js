
let tasks =[
    {id:1,title:"Create Product BackLog",isDone:true},
    {id:2,title:"Create Scrum and Sprint Plans",isDone:true},
    {id:3,title:"Create Sprint1 BackLog",isDone:false},
    {id:4,title:"Create Sprint2 BackLog",isDone:false},
    {id:5,title:"Create Sprint3 BackLog",isDone:false}
];

export const getTasks = () => [...tasks];

export const getTaskById = (id) => tasks.find(t => t.id===id);

export const addTask = (taskTitle) => {
    let task = {
        id:tasks[tasks.length-1].id+1,
        title:taskTitle,
        isDone:false
    };
    tasks.push(task);
    console.log(tasks);
}

export const delTask = (id) => {
    let index = tasks.findIndex(t => t.id===id);
    if(index>-1){
        tasks.splice(index,1);
    }else{
        throw "No Such Task Found";
    }
};

export const updateTask = (task) => {
    let index = tasks.findIndex(t => t.id===task.id);
    if(index>-1){
        tasks[index]=task;
    }else{
        throw "No Such Task Found";
    }
};
