<script setup>
import SiteMap from '@/components/SiteMap.vue'
import ShowPortfolio from '@/components/ShowPortfolio.vue'
</script>

<template>
  <div>
    <!--page map component-->
    <SiteMap page-title="work" page-name="portfolio" />
  </div>
  <div class="my-3">
    <!--body-->
    <!--show portfolio components-->
    <ShowPortfolio />
  </div>
</template>
