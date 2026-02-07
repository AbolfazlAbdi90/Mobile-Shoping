/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // فونت‌های خود را اینجا اضافه کنید
      fontFamily: {
        // نام کلاس: ['نام فونت در CSS', 'فونت جایگزین']
        'iransans': ['IRANSans', 'sans-serif'],
        'pinar': ['Pinar', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
