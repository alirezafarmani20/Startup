<script setup>
import { useTeamStore } from '@/stores/mainStore'
//import components
import Container from '@/layouts/Container.vue'
import Button from './Button.vue'
const team = useTeamStore()
team.fetchTeam()
</script>

<template>
  <div class="w-full my-4 sm:my-5">
    <Container>
      <div class="flex items-center justify-center flex-col">
        <div class="flex flex-col items-center justify-center gap-2 sm:w-[404px] sm:h-[162px]">
          <!--text box-->
          <span class="tracking-[6px] text-[#74C69D] text-[12px] font-medium uppercase">team</span>
          <h2 class="text-[#212529] text-[25px] font-bold capitalize">our talents</h2>
          <p class="text-center font-thin sm:font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, cumque illo.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row justify-between items-center sm:gap-[60px]">
          <!--image box-->
          <div
            v-for="team in team.getTeamData"
            :key="team.id"
            class="w-[289px] h-[319px] my-4 shadow-[6px_4px_6px_5px_] shadow-[#DBC9FF] rounded-[3px]"
          >
            <div class="flex items-center justify-center mt-5">
              <img :src="team.user_image" :alt="team.user_name" />
            </div>
            <div class="pl-7 mt-6 flex flex-col gap-3">
              <h2 class="text-[#212529] text-[18px] font-bold capitalize">{{ team.user_name }}</h2>
              <span class="uppercase text-[#212529d7] text-[10px] font-medium">{{ team.job }}</span>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center my-5">
          <Button button-text="view team" />
        </div>
      </div>
    </Container>
  </div>
</template>
