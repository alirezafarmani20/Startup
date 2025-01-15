<script setup>
// import components and layouts
import Container from '@/layouts/Container.vue'
</script>

<template>
  <div class="w-full bg-[#74C69D] h-[542px] sm:h-[486px]">
    <Container>
      <div class="w-full flex flex-col sm:flex-row items-center sm:justify-around sm:py-6 sm:items-center">
        <div class="flex flex-col text-balance items-start gap-1 sm:gap-4 order-2 sm:order-1 sm:w-[516px] sm:h-[299px] ">
          <!--textt box-->
          <span class="uppercase text-[#FFFFFF] font-bold tracking-[10px]">welcome</span>
          <h2 class="text-[#FFFFFF] font-medium text-[25px]">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p class="text-[#ffffffb0] text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, ducimus quasi unde
            quae necessitatibus nihil ipsam veniam in earum excepturi eveniet. Quidem cumque
            perspiciatis perferendis velit voluptate repellat laboriosam beatae?
          </p>
          <button
            class="bg-[#FFFFFF] text-[#000000] text-[16px] font-medium rounded-[5px] border-none capitalize my-3 flex items-center justify-center w-[160px] h-[48px]"
          >
            explor
          </button>
        </div>
        <div class="flex items-center order-1 sm:order-2">
          <!--image box-->
          <img
            src="../assets/images/main.png"
            alt="desctop image for main banner"
            class="hidden sm:flex"
          />
          <img
            src="../assets/images/mobile-image.png"
            alt="mobile image for main banner"
            class="flex sm:hidden"
          />
        </div>
      </div>
    </Container>
  </div>
</template>
