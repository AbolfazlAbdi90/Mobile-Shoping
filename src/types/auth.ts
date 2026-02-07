// src/types.ts

// تعریف ساختار اطلاعات کاربر
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// تعریف ساختار داده‌هایی که فرم لاگین ارسال می‌کند
export interface LoginPayload {
  name: string;
  username: string;
  password: string;
}


export interface FormErrors {
    name?:string ;
    password:string;
    username:string
}
