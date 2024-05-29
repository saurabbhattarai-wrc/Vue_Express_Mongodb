
<template>
  <div class="container mx-auto p-4">
    <section class="text-center font-bold">Firefly Attendance System</section>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Employee Name</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Attendance</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in employees" :key="employee._id" class="hover:bg-gray-100">
          <td class="px-6 py-4 border-b border-gray-200">{{ employee.name }}</td>
          <td class="px-6 py-4 border-b border-gray-200">
            <input type="checkbox" v-model="status" class="form-checkbox h-5 w-5 text-blue-600" />
          </td>
          <td class="px-6 py-4 border-b border-gray-200">
            <button @click="saveAttendance(employee._id, index)" class="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition duration-300">Save</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const employees = ref([]);
const status = ref('');

onMounted(async () => {
  const response = await axios.get('http://localhost:3000/api/v1/employees');
  employees.value = response.data;
}); 

const saveAttendance = async (id, name) => {
  console.log(status.value)
  try { 
    // console.log(id);
    await axios.post(`http://localhost:3000/api/v1/attendance/${id}`, {
      // name,
      status:status.value
    });
    alert(`Recorded: ${name} - ${status ? 'Present' : 'Absent'}`);
  } catch (error) {
    console.error("There was an error saving the attendance!", error);
  }
};


</script>

<style scoped>
.container {
  margin-top: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f4f4f4;
  font-weight: bold;
}

td {
  background-color: #fff;
}

button {
  cursor: pointer;
}
</style>
