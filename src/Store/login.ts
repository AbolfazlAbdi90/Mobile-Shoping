import { router } from "@/Router/router";
import type { LoginPayload, User } from "@/types/auth";
import { getStorege, removeStorage, setStorage } from "@/Utils/storage";
import { defineStore } from "pinia";

 export const useAuthStore = defineStore('auth' ,{
  state:()=>({
    token: getStorege<string>('auth_token'),
    user  : getStorege<User>('auth_user')
  }),
  getters:{
    isAuthenticated : (state)=> !!state.token
  },
  actions:{
    async login(payload:LoginPayload){
       try {
        const mockResponse = {
          data:{
            token: ' jwt_token_sample_123456',
            user:{
              id:1,
              name:payload.name,
              username:payload.username,
              email: 'user@test.com'
            }
          }
        }
        this.token = mockResponse.data.token;
        this.user = mockResponse.data.user;
       setStorage('auth_token',this.token);
       setStorage('auth_user' , this.user)
       
        router.push('/profile')
       } catch (error) {
        console.log('login error' , error)
        throw error
       }
    },
    logout(){
        this.token= null;
        this.user = null;
        router.push('/login')
        removeStorage('auth_token');
        removeStorage('auth_user')
    }
  }
})