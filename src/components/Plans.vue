<script setup>
//import components
import Button from './Button.vue'
import vector from '@/assets/icons/vector.png'
defineProps({
  plan: String,
  price: String,
})
const Capabilities = [
  {
    id: '1',
    image: vector,
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: '2',
    image: vector,
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: '3',
    image: vector,
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: '4',
    image: vector,
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: '5',
    image: vector,
    text: 'Lorem ipsum dolor sit.',
  },
]
</script>

<template>
  <div
    class="w-full mx-2 my-5 flex flex-col justify-around items-center gap-2 shadow-[6px_4px_6px_5px_] shadow-[#DBC9FF] rounded-[3px] h-[520px] sm:h-[545px] sm:w-[379px] sm:gap-0"
  >
    <div class="flex items-center justify-center flex-col gap-2 mt-3">
      <span class="text-center capitalize text-[#000000] text-[17px] font-medium">{{ plan }}</span>
      <h2 class="text-[15px] font-medium text-[#2125299a]">
        <b class="text-[#000000] font-bold text-[30px] sm:text-[45px]">{{ price }}</b> /month
      </h2>
    </div>
    <div class="flex items-center justify-center">
      <p
        class="flex text-wrap items-center justify-center text-center px-2 text-[#2125299a] font-normal"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aspernatur natus ea modi
        alias?
      </p>
    </div>
    <div class="flex flex-col pr-[80px] gap-4">
      <div v-for="item in Capabilities" :key="item.id" class="flex items-center gap-3">
        <img :src="item.image" alt="green vector" />
        <p class="text-black fonrt-[20px]">{{ item.text }}</p>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <Button button-text="learn more" class="mt-3 sm:mt-5" />
    </div>
  </div>
</template>
