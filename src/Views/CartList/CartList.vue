<script setup lang="ts">
import { useProduct } from '@/Store/productlist'

const UseGetProducts = useProduct()
</script>

<template>
  <h1
    class="text-2xl font-bold text-center p-4 bg-linear-to-r from-pink-600 bg-clip-text text-transparent"
  >
    CartList
  </h1>

  <div class="flex justify-center items-center" v-if="UseGetProducts.items.length === 0">
    <section class="font-bold text-2xl md:text-4xl text-center text-red-500">
      youre cart is empty
    </section>
  </div>
  <div
    v-else
    class="bg-gray-100  mb-4 rounded-2xl flex flex-col flex-wrap space-y-6 justify-center"
    v-for="(item, index) in UseGetProducts.items"
    :key="index"
  >
    <section class="text-center mx-auto mt-4 rounded-2xl w-100 mb-4 bg-white">
      <img class="mx-auto mt-4 mb-4" :src="item.image" alt="item.image" />
      <h2 class="font-bold mb-4 text-2xl">{{ item.title }}</h2>
      <h2 class="font-black text-1xl">quantity:{{ item.quantity }}</h2>
      <p class="text-white bg-gray-300 rounded-2xl w-80 font-bold mx-auto mt-2  text-center text-1xl">
        des: <span class="text-black">{{ item.description }}</span>
      </p>
      <p class="mt-4">
        discount: <span class="text-green-400">{{ item.discount }}</span>
      </p>
      <p class="font-bold text-black">
        price: <span class="font-bold text-red-400 text-1xl">{{ item.price }}</span>
      </p>
      <div class="flex justify-center items-center p-4 gap-4">
        <button
          @click="UseGetProducts.addTocart(item)"
          class="bg-blue-500 cursor-pointer text-white py-2 px-4 rounded-2xl"
        >
          +
        </button>
        <h3 class="font-bold text-2xl">{{ item.quantity }}</h3>
        <button
          @click="UseGetProducts.decrease(item)"
          class="bg-orange-500 cursor-pointer text-white py-2 px-4 rounded-2xl"
        >
          -
        </button>
      </div>
      <section class="flex justify-center mb-4">
        <button
          @click="UseGetProducts.deleteId(item)"
          class="bg-red-500 cursor-pointer text-white py-2 px-4 rounded-2xl"
        >
          Delete
        </button>
      </section>
    </section>
  </div>
  <div class="bg-gray-200 h-50 flex items-center mt-4 justify-center w-120 mx-auto p-4 rounded-2xl shadow" >
      <p class="text-2xl text-center font-bold text-black" > totaly Price : <span class="text-red-600 font-bold" >{{ UseGetProducts.totalPrice }}</span></p>
  </div>
</template>
