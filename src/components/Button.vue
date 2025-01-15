<script setup>
defineProps({
  buttonText: String,
})
</script>

<template>
  <button
    class="flex items-center justify-center capitalize w-[160px] h-[48px] rounded-[7px] bg-[#000000] text-[#FFFFFF] font-medium"
  >
    {{ buttonText }}
  </button>
</template>
