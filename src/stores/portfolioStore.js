import { defineStore } from 'pinia'
import axios from 'axios'
// base url
const url = 'http://localhost:3000'

// create store for portfolio
export const usePortfolioStore = defineStore('portfolioStore', {
  state: () => ({
    loading: true,
    portfolios: [],
    status: '200',
  }),
  getters: {
    getPortfolioData: (state) => {
      state.portfolios
    },
  },
  actions: {
    async fetchPortfolioData() {
      try {
        const response = await axios.get(`${url}/portfolio`)
        this.portfolios = response.data
        this.loading = false
        console.log(response.data)
      } catch (error) {
        console.error(`erorr is ${error.message}`)
        this.loading = false
      }
    },
  },
})
