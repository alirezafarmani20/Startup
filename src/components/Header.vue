<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
// import components and layouts
import Container from '@/layouts/Container.vue';

const menuIsActive = ref(false)
const menu = () => {
    menuIsActive.value = !menuIsActive.value
    console.log("button is clicked")
};
</script>

<template>
    <header class="w-full bg-[#74C69D] ">
        <Container>
            <div class="w-full flex items-center justify-between">
                <div class="flex items-center py-4 sm:py-6">
                    <!--logo section-->
                    <RouterLink to="/">
                        <img src="../assets/images/desctop.png" alt="website logo" class="hidden sm:flex">
                        <img src="../assets/images/mobile.png" alt="website logo" class="flex sm:hidden">
                    </RouterLink>
                </div>
                <div class="flex items-center">
                    <!--menu section-->
                    <div class="flex items-center">
                        <!--desctop menu-->
                        <img src="../assets/icons/drop-menu.png" alt="drop down menu" class="flex sm:hidden" @click="menu">
                        <nav class="sm:flex sm:items-center sm:justify-between sm:w-full sm:gap-10 text-[#FFFFFF] sm:font-medium hidden font-normal">
                            <RouterLink to="/">Home</RouterLink>
                            <RouterLink to="/portfolio">Portfolio</RouterLink>
                            <RouterLink to="/our-service">Our Service</RouterLink>
                            <RouterLink to="/contact">Contact</RouterLink>
                        </nav>
                    </div>
                </div>
            </div>
        </Container>
    </header>
</template>