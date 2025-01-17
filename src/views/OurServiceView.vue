<script setup>
import SiteMap from '@/components/SiteMap.vue'
import Plans from '@/components/Plans.vue'
import Container from '@/layouts/Container.vue'
</script>

<template>
  <div>
    <!--page map component-->
    <SiteMap page-title="plan" page-name="our service" />
  </div>
  <Container>
    <div
      class="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6 my-6"
    >
      <!--plans components-->
      <Plans plan="basic" price="$100" />
      <Plans plan="plus" price="$250" />
      <Plans plan="pro" price="$400" />
    </div>
  </Container>
</template>
