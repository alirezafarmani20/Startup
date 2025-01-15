<script setup>
import { RouterLink } from 'vue-router'
// components and layouts
import Container from '@/layouts/Container.vue'
// import medais
import faceBook from '@/assets/icons/facebook.png'
import instagram from '@/assets/icons/instagram.png'
import paintrest from '@/assets/icons/paintrest.png'
import ticktok from '@/assets/icons/ticktok.png'
import twitter from '@/assets/icons/twitter.png'
import whatsup from '@/assets/icons/whatsup.png'
import youtube from '@/assets/icons/youtube.png'
// media list
const socialMedia = [faceBook, instagram, paintrest, ticktok, twitter, whatsup, youtube]
</script>

<template>
  <footer class="w-full bg-[#74C69D] h-[125px]">
    <Container>
      <div
        class="flex flex-wrap gap-4 sm:flex-row justify-center sm:justify-between items-center py-8 h-full sm:py-12"
      >
        <div class="flex gap-5 items-center bg-inherit px-3">
          <!--social media-->
          <img v-for="media in socialMedia" :src="media" alt="socil media icons" />
        </div>
        <div class="flex justify-center items-center">
          <!--text box-->
          <h2 class="text-[#FFFFFF] font-medium">Lorem ipsum dolor sit amet consectetur.</h2>
        </div>
      </div>
    </Container>
  </footer>
</template>
