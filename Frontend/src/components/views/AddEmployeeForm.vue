<template>
  <form @submit.prevent="submitForm">
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
      <input v-model="name" type="text" id="name" name="name" autocomplete="name" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
    </div>
    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Add Name</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const name = ref('');

    const submitForm = async () => {
      if (name.value.trim() !== '') {
        try { 
          const response = await axios.post('http://localhost:3000/api/v1/employees', { name: name.value });
          console.log('Employee added:', response.data);
          name.value = '';
        } catch (error) {
          console.error('Error adding employee:', error);
        }
      } else {
        console.log('Name cannot be empty');
      }
    };

    return {
      name,
      submitForm,
    };
  },
};
</script>
