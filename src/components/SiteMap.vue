<script setup>
defineProps({
    pageTitle: String,
    pageName: String,
})
</script>

<template>
<div class="w-full flex justify-center items-center my-4 sm:my-8">
    <div class="w-full flex flex-col items-center justify-center text-wrap sm:w-[311px]">
        <span class="text-center tracking-[6px] uppercase text-[#74C69D] text-[15px] ">{{ pageTitle }}</span>
        <h2 class="text-center capitalize text-[#000000] text-[27px] font-bold">{{ pageName }}</h2>
        <p class="text-center px-5 sm:px-0 font-medium text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
</div>
</template>