<template>
  <div>
    <DarkMode @click="toggleDark()" :isDark="isDark" />
    <slot />
  </div>
</template>

<script setup>
  import { useDark, useToggle } from '@vueuse/core'

  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>