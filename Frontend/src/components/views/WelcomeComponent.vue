<template>
    <div class="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center">
      <h1 class="mb-4 text-2xl font-semibold text-gray-700">Welcome to Attendance System</h1>
      <button @click="handleEnter" class="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300">
        Enter
      </button>
    </div>
  </template>
  
  <script setup>
import { useRouter } from 'vue-router';

const router = useRouter(); 

const handleEnter = () => {
  router.push('/Employeelist');
};
</script>
  
  

