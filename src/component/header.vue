<script setup>
import { useProduct } from '@/Store/productlist'

const useProducty = useProduct()
</script>
<template>
  <header>
    <section class="flex justify-between mx-4 my-4">
      <h1 class="bg-clip-text bg-linear-to-r from-purple-400 to-pink-500 text-transparent">
        Online-Shop
      </h1>
      <router-link :to="{ name: 'cartList' }">
        <section class="flex">
          <span class="bg-red-500 h-8 py-1 px-2 rounded-full text-white">{{
            useProducty.totalQuantity
          }}</span>

          <img
            class="w-12 h-12"
            src="data:image/png;base64,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"
            alt=""
          />
        </section>
      </router-link>
    </section>

    <nav
      class="flex bg-linear-to-r from-purple-200 to-blue-400 text-white flex-col justify-center px-6 py-4 mt-4 md:flex-row md:justify-between items-center"
    >
      <router-link
        :to="{ name: 'home' }"
        class="border-b-2 border-transparent text-gray-700 hover:text-white hover:border-yellow-600 transition-all duration-300"
        active-class="border-yellow-400 text-purple-600"
      >
        Home
      </router-link>
      <router-link
        active-class="border-yellow-400 text-purple-600"
        class="border-b-2 border-transparent text-gray-700 hover:text-white hover:border-yellow-600 transition-all duration-300"
        :to="{ name: 'product' }"
        >product</router-link
      >
      <router-link
        active-class="border-yellow-400 text-purple-600"
        class="border-b-2 border-transparent text-gray-700 hover:text-white hover:border-yellow-600 transition-all duration-300"
        :to="{ name: 'login' }"
        >login</router-link
      >
      <router-link
        active-class="border-yellow-400 text-purple-600"
        class="border-b-2 border-transparent text-gray-700 hover:text-white hover:border-yellow-600 transition-all duration-300"
        :to="{ name: 'profile' }"
        ><span class="">profile</span></router-link
      >
    </nav>
  </header>
  <router-view></router-view>
</template>
