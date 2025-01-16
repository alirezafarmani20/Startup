import { defineStore } from 'pinia'
import axios from 'axios'
// base url
const url = 'http://localhost:3000'
//create store for team
export const useTeamStore = defineStore('teamStore', {
  state: () => ({
    loading: true,
    team: [],
  }),
  getters: {
    getTeamData: (state) => state.team,
  },
  actions: {
    async fetchTeam() {
      try {
        const response = await axios.get(`${url}/team`)
        this.team = response.data
        this.loading = false
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching team data:', error)
        this.loading = false
      }
    },
  },
})
