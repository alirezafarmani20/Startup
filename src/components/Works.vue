<script setup>
// import compoents
import Container from '@/layouts/Container.vue';
import Button from './Button.vue';
</script>

<template>
    <div class="w-full my-4 sm:my-5">
        <Container>
            <div class="w-full flex flex-col sm:flex-row justify-center items-center sm:justify-around">
                <div class="flex flex-col gap-3 sm:gap-4 text-wrap order-2 sm:order-1 my-4 sm:my-0 sm:w-[477px] sm:h-[255px]">
                    <!--text box-->
                    <h2 class="text-[#212529] text-[15px] sm:text-[25px] font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
                    <p class="text-[15px] text-[#212529] font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum, illo numquam accusantium nesciunt pariatur ea harum eos assumenda, rem, eaque dicta laborum. Asperiores hic beatae quia iste expedita at.</p>
                    <Button button-text="learn more" />
                </div>
                <div class="flex items-center justify-center order-1 sm:order-2">
                    <!--image box-->
                    <img src="../assets/images/desctop-work.png" alt="image" class="hidden sm:flex">
                    <img src="../assets/images/work.png" alt="image" class="flex sm:hidden">
                </div>
            </div>
        </Container>
    </div>
</template>