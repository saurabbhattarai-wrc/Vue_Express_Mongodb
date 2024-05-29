import { createRouter,createWebHistory } from 'vue-router'
import WelcomeComponent from '@/components/views/WelcomeComponent.vue' 
import Employeelist from '@/components/views/Employeelist.vue' 
import Admin from '@/components/views/Admin.vue'
import AddEmployeeForm from '@/components/views/AddEmployeeForm.vue'




const routes = [
    { 
        path: '/',
        name: 'WelcomeComponent',
        component: WelcomeComponent
    },

      {
     path : '/employeelist', 
     name :   'EmployeeList',
    component : Employeelist 
    }, 
    {  
        path:'/admin',
        name : Admin, 
        component : Admin
    }, 
    {  
        path:'/addEmployeeForm',
        name : AddEmployeeForm,
        component : AddEmployeeForm
    }
] 


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router; 