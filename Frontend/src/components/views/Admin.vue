<template>
    <div class="flex">
      <div class="w-1/4 p-4">
        <button @click="addEmployee" class="w-full bg-blue-500 text-white py-2 px-4 rounded mb-2">Add Employee</button>
        <button @click="editEmployee" class="w-full bg-blue-500 text-white py-2 px-4 rounded mb-2">Edit Employee</button>
        <button @click="deleteEmployee" class="w-full bg-blue-500 text-white py-2 px-4 rounded mb-2">Delete Employee</button>
      </div>
      <div class="w-3/4 p-4">
        <div class="flex mb-4">
          <input v-model="day" type="number" placeholder="Day" class="border border-gray-300 p-2 mr-2">
          <input v-model="month" type="number" placeholder="Month" class="border border-gray-300 p-2 mr-2">
          <input v-model="year" type="number" placeholder="Year" class="border border-gray-300 p-2 mr-2">
          <button @click="viewDate" class="bg-blue-500 text-white py-2 px-4 rounded">View</button>
        </div>
        <div v-if="selectedDate" class="border border-gray-300 p-4 text-center">
          Selected Date: {{ selectedDate }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'; 
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const day = ref('');
      const month = ref('');
      const year = ref('');
      const selectedDate = ref('');  
      const router = useRouter(); 
      
  
      const addEmployee = () => {
         router.push('/AddEmployeeForm');
      };
  
      const editEmployee = () => {
        // logic to edit employee
      };
  
      const deleteEmployee = () => {
        // logic to delete employee
      };
  
      const viewDate = () => {
        if (day.value && month.value && year.value) {
          selectedDate.value = `${year.value}-${month.value}-${day.value}`;
        } else {
          selectedDate.value = '';
        }
      };
  
      return {
        day,
        month,
        year,
        selectedDate,
        addEmployee,
        editEmployee,
        deleteEmployee,
        viewDate
      };
    }
  };
  </script>
  