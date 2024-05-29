// stores/employeeStore.js bigger

// add // 
import { defineStore } from 'pinia';

export const useEmployeeStore = defineStore('employee', {
  state: () => ({
    employees: [
      
    ],
  }),
  actions: {
    addEmployee(name) {
      const newId = this.employees.length ? Math.max(...this.employees.map(emp => emp.id)) + 1 : 1;
      const newEmployee = {
        id: newId,
        name: name,
        attendance: false,
      };
      console.log(newEmployee); 
      this.employees.push(newEmployee);
    }, 
    saveAttendance(index) {

    },
  },
});
