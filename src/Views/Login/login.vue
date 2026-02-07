<script setup lang="ts">
import { useAuthStore } from '@/Store/login'
import type { FormErrors } from '@/types/auth'
import { reactive, ref } from 'vue'
const authUser = useAuthStore()
const errors = reactive<FormErrors>({
  name: '',
  password: '',
  username: '',
})
const IsvalidName = (str: string) => {
  return /^[a-zA-Z\s]+$/.test(str)
}
const form = reactive({
  name: '',
  password: '',
  username: '',
})
const loading = ref(false)
const errorMessage = ref('')

function Isvalidate(): boolean {
  let isvalid = true
  errors.name = ''
  errors.password = ''
  errors.username = ''

  //  if !name

  if (!form.name) {
    errors.name = 'name is empty'
    isvalid = false
  } else if (!IsvalidName(form.name)) {
    errors.name = 'only english letters'
    isvalid = false
  }

  // if !password
  if (!form.password) {
    errors.password = 'password is empty';
    isvalid = false
  } else if(form.password.length < 6) {
    errors.password = "password must be atleast 6 word or number "
    isvalid = false
  }  else if (form.password.length >6){
    errors.password = "password must be atleast 6 word or number";
    isvalid = false
  }

  // if !userName 
   
   if (!form.username) {
     errors.username = 'userName is empty';
     isvalid= false ;

   }else if(form.username.length <6){
    errors.username = 'userName must be atleast 6 word or number'
    isvalid = false
   } else if (form.username.length >6){
    errors.username = "userName must be atleast 6 word or number";
    isvalid = false
  }
   return isvalid
}

async function submit() {
  if(!Isvalidate()) return
  loading.value = true
  errorMessage.value = ''
  try {
    await authUser.login(form)
  } catch (error) {
    errorMessage.value = 'اطلاعات وارد شده صحیح نمی‌باشد '
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <h1 class="text-center font-bold text-2xl mt-4">wellcome to login</h1>

  <form
    @submit.prevent="submit"
    class=" bg-gray-200 flex flex-col space-y-4 rounded-2xl w-100 mt-4 shadow-1xl mx-auto"
  >
    <div class="ml-13 mt-4 flex justify-center flex-col">
      <label class="mb-4 font-bold text-2xl">Name:</label>
      <input
        class="text-center border-3 h-10 outline-none focus:border-blue-400 w-70 rounded-2xl"
        type="text"
        placeholder="Enter Youre Name"
        v-model="form.name"
      />
      <span class="text-red-500  mt-3 font-bold" v-if="errors.name" >{{ errors.name }}</span>

      <label class="mb-4 mt-8 font-bold text-2xl">Password:</label>
      <input
        v-model="form.password"
        type="password"
        class="text-center border-3 h-10 outline-none focus:border-red-400 w-70 rounded-2xl"
      />
      <span class="text-red-500 mt-3 font-bold" v-if="errors.password" >{{ errors.password }}</span>
      <label class="mb-4 mt-8 font-bold text-2xl">UserName:</label>
      <input
        v-model="form.username"
        type="text"
        class="text-center border-3 h-10 outline-none focus:border-green-400 w-70 rounded-2xl"
      />
      <span class="text-red-500 font-bold mt-3 " v-if="errors.username" >{{ errors.username }}</span>
    </div>
    <div class="flex justify-center">
      <button
        :disabled="loading"
        type="submit"
        class="p-4 bg-blue-600 rounded-2xl text-white cursor-pointer mt-4 mb-4"
      >
        {{ loading ? 'loaing ...' : 'login' }}
      </button>
    </div>
  </form>
</template>
