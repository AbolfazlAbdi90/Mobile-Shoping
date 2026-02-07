<script setup lang="ts">
import { useAuthStore } from '@/Store/login'
import { computed } from 'vue'

const isAuth = useAuthStore()
const user = computed(() => isAuth.user)
function logOut() {
  isAuth.logout()
}
</script>
<template>
  <div class=" h-140 md:h-150 bg-gray-100 flex tems-center justify-center p-4">
    
    <div v-if="user" class="bg-white shadow-xl rounded-2xl w-full max-w-md overflow-hidden">
      
      <div class="bg-blue-600 p-6 text-center">
        <div class="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center text-4xl text-blue-600 font-bold border-4 border-blue-200">
          {{ user.name.charAt(0).toUpperCase() }}
        </div>
        <h2 class="mt-4 text-white text-2xl font-bold">{{ user.name }}</h2>
        <p class="text-blue-200">@{{ user.username }}</p>
      </div>

      <div class="p-6 space-y-4">
        
        <div class="flex justify-between border-b pb-2">
          <span class="text-gray-500 font-medium">User ID:</span>
          <span class="text-gray-800 font-bold">{{ user.id }}</span>
        </div>

        <div class="flex justify-between border-b pb-2">
          <span class="text-gray-500 font-medium">Full Name:</span>
          <span class="text-gray-800">{{ user.name }}</span>
        </div>

        <div class="flex justify-between border-b pb-2">
          <span class="text-gray-500 font-medium">Username:</span>
          <span class="text-gray-800">{{ user.username }}</span>
        </div>
        
        <div class="flex justify-between border-b pb-2">
          <span class="text-gray-500 font-medium">Email:</span>
          <span class="text-gray-800">{{ user.email }}</span>
        </div>

      </div>

      <div class="p-6 pt-0">
        <button 
          @click="logOut" 
          class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition duration-300 cursor-pointer shadow-md"
        >
          Logout
        </button>
      </div>

    </div>

    <div v-else class="text-center">
      <p class="text-xl text-gray-600 mb-4">No user data found.</p>
      <router-link to="/login" class="text-blue-500 underline">Go to Login</router-link>
    </div>

  </div>
</template>
