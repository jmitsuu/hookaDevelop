<script setup>
import { useCartStore } from "../stores/storeCart";
import { onClickOutside } from "@vueuse/core";
import { onMounted, ref } from "vue";
const store = useCartStore();
let dataItems = 4;
const target = ref(null);
const modal = ref(false);
const inputName = ref("");
console.log(store.qtdCart);
onClickOutside(target, () => (store.modalCart = false));
onMounted(() => {});
</script>

<template>
  <Transition>
  <div
    v-if="store.modalCart"
    ref="target"
    class="fixed right-0 top-0  z-50 bg-opacity-95 bg-black h-screen w-full xl:w-96"
  >
    <h1 class="text-[2.8rem] mx-auto mt-10  text-gray-300 text-center font-bold mb-10">
      Carrinho
    </h1>
    <div class="h-1/2 overflow-y-auto px-4 m-4  bg-black  rounded-xl bg-opacity-20 ">
      <div class="py-2 px-4 relative" v-for="item in store.cart" :key="item.title">
        <div class="flex gap-2 items-center  relative w-full   p-3 bg-[#8183b9] bg-opacity-20 rounded-md">
          <img
            :src="
              `https://kolhpoypmdfbtfpgwuwt.supabase.co/storage/v1/object/public/uploads/` +
              item.img
            "
            class="h-8 rounded-sm"
          />
          <p class="text-gray-200 font-bold ">
            <span v-for="i in store.qtdCart">
              <span v-if="item.title.includes(i.title)">
                {{ i.qt }}x {{ i.title }} -</span
              >
            </span>
            {{ item.price }} R$
          </p>

          <!-- <XMarkIcon class="h-5 text-red-500 cursor-pointer" @click="store.removeItemCart(item)" /> -->
       
        </div>
           <Icon
            name="ci:close-md"
            @click="store.removeItemCart(item)"
            class="h-10  text-red-500 cursor-pointer  absolute right-0 bottom-5 "
          />
      </div>
    </div>
    <h1 class="text-white text-center mt-10  bottom-4 right-4 text-2xl font-bold">
     Total: R$ {{ store.allPrices }}
    </h1>
    <div class="mt-10 bottom-10 gap-4 flex justify-center w-full">
      <!-- <input type="text" class="float-left absolute left-0 outline-none w-16 px-2 py-1 rounded-md animate-pulse" placeholder="nome" /> -->
      <div
        v-if="modal"
        class="w-48 bg-white items-center rounded-md border-2 p-4 absolute bottom-80 flex flex-col"
      >
        <Icon
          name="ci:close-md"
          @click="modal = !modal"
          class="h-5 text-red-500 cursor-pointer float-right"
        />
        <label class="text-gray-800 text-[1.2rem] mb-1">Insira seu nome</label>
        <input
          type="text"
          class="w-24 bg-gray-200 rounded-sm px-2"
          placeholder="Nome"
          v-model="inputName"
          required
        />

        <a
          v-if="inputName"
          class="bg-green-500 m-2 p-1 rounded-md text-white font-bold"
          :href="`https://api.whatsapp.com/send?phone=554891752847&text=Ol%C3%A1%20meu%20nome%20%C3%A9%20${inputName},%20tenho%20interesse%20em%20comprar%20os%20produto(s)%20abaixo:%0A%0A%20*${store.sendToWhats}*%20%0A%0ATotal:${store.allPrices}%20`"
        >
          Solicitar
        </a>
      </div>

      <button
        class="text-[1.9rem] px-2 bg-white text-gray-600 rounded-md"
        @click="store.modalCart = false"
      >
        Voltar
      </button>
      <!-- 
      <a class="text-[1.3rem] px-2 bg-yellow-600 rounded-md cursor-pointer"
        :href="`https://api.whatsapp.com/send?phone=554891699518&text=Ola%20tenho%20interesse%20em%20comprar%20os%20produto(s)%20abaixo:%0A%0A%20*${store.sendToWhats}*%20%0A%0ATotal:${store.allPrices}%20`">
        Solicitar
      </a> -->
      <button
        @click="modal = true"
        class="text-[1.9rem] bg-green-50 px-4 py-2 text-green-600 rounded-sm cursor-pointer"
      >
       Solicitar
      </button>
    </div>
  </div>
</Transition>
</template>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
