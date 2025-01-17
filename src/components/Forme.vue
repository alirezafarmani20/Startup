<script setup>
import Container from '@/layouts/Container.vue'
import Button from './Button.vue'
</script>

<template>
  <div class="w-full my-7">
    <Container>
      <div
        class="w-full flex flex-col items-center justify-center sm:justify-between sm:gap-8 sm:flex-row"
      >
        <div class="w-full items-center justify-cente order-2 sm:order-1">
          <!--contact forme-->
          <form action="" class="flex flex-col w-full">
            <div class="flex flex-col gap-2">
              <!--name box-->
              <label for="name" class="text-[#000000] font-medium text-[19px]">name</label>
              <input
                type="text"
                name="name"
                id="name"
                class="w-full border-[2px] rounded-[6px] border-[#000000] my-2 h-[38px] bg-[#EEEEEE]"
              />
            </div>
            <div class="flex flex-col gap-2">
              <!--email box-->
              <label for="email" class="text-[#000000] font-medium text-[19px]">email</label>
              <input
                type="email"
                name="email"
                id="email"
                class="w-full border-[2px] rounded-[6px] border-[#000000] my-2 h-[38px] bg-[#EEEEEE]"
              />
            </div>
            <div class="flex flex-col gap-2">
              <!--message box-->
              <label for="message" class="text-[#000000] font-medium text-[19px]">message</label>
              <textarea
                name="message"
                id="message"
                class="w-full border-[2px] rounded-[6px] border-[#000000] my-2 h-[141px] bg-[#EEEEEE]"
              ></textarea>
            </div>
            <div class="my-4">
              <!--submit box-->
              <Button button-text="submit" class="w-full" />
            </div>
          </form>
        </div>
        <div class="order-1 sm:order-2 w-full">
          <!--location box-->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9537363153169!3d-37.8162797797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8b1f9b1b1b1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611816751234!5m2!1sen!2sau"
            allowfullscreen=""
            loading="lazy"
            class="my-3 w-full sm:h-[385px] rounded"
          ></iframe>
        </div>
      </div>
    </Container>
  </div>
</template>
