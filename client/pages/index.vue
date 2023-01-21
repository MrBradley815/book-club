<template>
  <div class="max-w-screen-lg px-4">
    <h1 class="text-3xl font-serif font-bold underline mb-1">The Reading Dead Book Club</h1>
    <p class="font-sans mb-2">Voluptatem, quia. Quas ipsam rerum, laudantium sapiente officia voluptatem quis, soluta harum assumenda ipsum alias ullam adipisci obcaecati ab nemo rem voluptates nostrum</p>
    <p class="font-sans mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, totam.</p>
    <p class="font-sans">Voluptas ullam quam assumenda eos. Deleniti distinctio, quae suscipit unde provident eos earum ipsa neque dolor praesentium? Alias aliquid voluptatum libero odio.</p>
    <DarkMode @click="toggleDark()" :isDark="isDark" />
  </div>
</template>

<script setup>
  import { useDark, useToggle } from '@vueuse/core'

  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>

<style scoped>

</style>