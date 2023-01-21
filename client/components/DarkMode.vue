<template>
  <div class="fixed top-4 right-4 cursor-pointer">
    <IconSun class="fill-gray-900 dark:fill-gray-50" v-if="isDark" />
    <IconMoon class="fill-gray-900 dark:fill-gray-50" v-else  />
  </div>
</template>

<script setup>
  const { isDark } = defineProps(['isDark'])
</script>