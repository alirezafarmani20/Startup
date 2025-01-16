<script setup>
import Container from '@/layouts/Container.vue';
import Button from './Button.vue';
// import images
import portfolio1 from '@/assets/images/desctop-portfolio.png';
import portfolio2 from '@/assets/images/desctop-portfolio2.png';
import portfolio3 from '@/assets/images/desctop-portfolio3.png';
import portfolio4 from '@/assets/images/desctop-portfolio4.png';
import portfolio5 from '@/assets/images/desctop-portfolio5.png';
import portfolio6 from '@/assets/images/desctop-portfolio6.png';
import portfolio7 from '@/assets/images/desctop-portfolio7.png';
import portfolio8 from '@/assets/images/desctop-portfolio8.png';
// portfolio lists
const portfolios = [portfolio1,portfolio2,portfolio3,portfolio4,portfolio5,portfolio6,portfolio7,portfolio8]
</script>

<template>
  <div class="w-full">
    <Container>
      <div class="w-full flex flex-wrap items-center justify-center my-5">
        <img v-for="portfolio in portfolios" :src="portfolio" alt="portfolio" class="my-3 sm:my-4 sm:mx-4">
      </div>
      <div class="flex items-center justify-center my-5">
        <Button button-text="learn more" />
      </div>
    </Container>
  </div>
</template>
