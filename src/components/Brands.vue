<script setup>
import Container from '@/layouts/Container.vue'
import Button from './Button.vue'
//import brands
import google from '@/assets/images/google.png'
import microsoft from '@/assets/images/microsoft.png'
import airbnb from '@/assets/images/airbnb.png'
import facebook from '@/assets/images/facebook.png'
import spotify from '@/assets/images/spotify.png'
// brand list
const brands = [google, microsoft, airbnb, facebook, spotify]
</script>

<template>
  <div class="w-full">
    <Container>
      <div class="w-full flex flex-col gap-2 sm:gap-3">
        <div class="flex flex-col items-center justify-center my-4 sm:my-5 gap-4">
          <!--text box-->
          <span class="tracking-[5px] uppercase text-[#74C69D]">partners</span>
          <h2 class="text-black text-[25px] sm:text-[30px] font-bold">Lorem, ipsum dolor</h2>
          <p class="text-wrap text-[#000000] text-[18px] font-normal text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="flex items-center justify-between flex-col sm:flex-row gap-3 sm:gap-0 my-3">
          <!--brands box-->
          <img v-for="brand in brands" :src="brand" alt="brands" />
        </div>
        <div class="flex justify-center items-center w-full my-3">
          <Button button-text="learn more" />
        </div>
      </div>
    </Container>
  </div>
</template>
