import { createRouter,createWebHashHistory } from 'vue-router'

import Dashboard from './components/Dashboard.vue'
import TasksList from './components/tasks/TasksList.vue'
import EmpsList from './components/emps/EmpsList.vue';

const routes = [
    { path: '/', component: Dashboard },
    { path: '/tasks', component: TasksList },
    { path: '/emps', component: EmpsList }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;