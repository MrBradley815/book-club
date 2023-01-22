<template>
  <form class="flex flex-col gap-1" @submit.prevent="handleSubmit">
    <input
      type="email"
      class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-300 focus:ring-gray-300 block w-full sm:text-sm focus:ring-1 dark:bg-gray-900 dark:border-slate-100 dark:focus:border-white dark:placeholder-white dark:placeholder-opacity-70"
      placeholder="email"
      required
      v-model="email" />
    <input
      type="text"
      class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-300 focus:ring-gray-300 block w-full sm:text-sm focus:ring-1 dark:bg-gray-900 dark:border-slate-100 dark:focus:border-white dark:placeholder-white dark:placeholder-opacity-70"
      placeholder="display name"
      required
      v-model="displayName" />
    <input
      type="password"
      class="mb-3 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-300 focus:ring-gray-300 block w-full sm:text-sm focus:ring-1 dark:bg-gray-900 dark:border-slate-100 dark:focus:border-white dark:placeholder-white dark:placeholder-opacity-70"
      placeholder="password"
      required
      v-model="password" />
    <button type="submit" class="p-2 mb-2 bg-white text-black border-2 border-black dark:bg-gray-900 dark:text-white dark:border-white">Submit</button>
  </form>
</template>

<script setup>
  const email = ref('')
  const displayName = ref('')
  const password = ref('')

  const handleSubmit = async () => {
    alert('Signing up...')
  }
</script>