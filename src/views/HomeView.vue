<script setup>
import MainBaner from '@/components/MainBaner.vue'
import Brands from '@/components/Brands.vue'
import Conections from '@/components/Conections.vue';
import Works from '@/components/Works.vue';
</script>

<template>
  <div>
    <!--baner section-->
    <MainBaner />
  </div>
  <div class=" my-3">
    <!--brands section-->
    <Brands />
  </div>
  <div class="my-3">
    <!--conections section-->
    <Conections />
  </div>
  <div class="my-3">
    <!--works section-->
    <Works />
  </div>
</template>
