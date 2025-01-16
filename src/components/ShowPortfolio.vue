<script setup>
import Container from '@/layouts/Container.vue'
import { usePortfolioStore } from '@/stores/portfolioStore'
const portfolios = usePortfolioStore()
portfolios.fetchPortfolioData()
</script>

<template>
  <div class="w-full">
    <Container>
      <div class="w-full flex flex-wrap justify-between">
        <img
          v-for="portfolio in portfolios.getPortfolioData"
          :key="portfolio.id"
          :src="portfolio.image"
          alt="sample website"
        />
      </div>
    </Container>
  </div>
</template>
