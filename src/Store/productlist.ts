import { defineStore } from 'pinia'
import type { IProductList } from '@/types/product'
import type { IProducTypes } from '@/types/productStore'
import { getStorege, removeStorage, setStorage } from '@/Utils/storage'
 const STORAGE_KEY  ='cart_item'
export const useProduct = defineStore('cart', {
  state: () => ({
    items: [] as IProducTypes[],
    // basket
    // products
    // currentCategory
  }),

  actions: {

    initCart(){
      const data = getStorege<IProducTypes[]>(STORAGE_KEY)
       if (data) {
         this.items = data
       }
    },
 

    addTocart(product: IProductList) {
      const item = this.items.find(i => i.id === product.id)

      if (item) {
        item.quantity++
      } else {
        this.items.push({
          ...product,
          quantity: 1,
        })
      }
      setStorage(STORAGE_KEY , this.items)
    },
    deleteId(product:IProductList){
        this.items = this.items.filter(item=>item.id !==product.id)
       removeStorage(STORAGE_KEY )
      },

    decrease(product: IProducTypes) {
      const item = this.items.find(i => i.id === product.id)
      if (!item) return

      if (item.quantity > 1) {
        item.quantity--
      } else {
        this.items = this.items.filter(i => i.id !== product.id)
      }
      setStorage(STORAGE_KEY , this.items)
    },
  },

  getters: {
    totalQuantity: (state) =>
      state.items.reduce((total, item) => total + item.quantity, 0),

    totalPrice: (state) =>
      state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
  },
})
