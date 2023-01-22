<template>
  <div>
    <h1 class="text-4xl text-center uppercase underline mb-1 font-serif">W<span class="text-2xl">elcome</span></h1>
    <div v-if="showLogin">
      <h2 class="font-serif text-center text-sm mb-5">Login to your account below</h2>
      <LoginForm />
      <p class="text-xs text-center">No account yet? <span @click="showLogin = false" class="underline cursor-pointer">Signup</span> instead</p>
    </div>
    <div v-else>
      <h2 class="font-serif text-center text-sm mb-5">Sign up for an account below</h2>
      <SignupForm />
      <p class="text-xs text-center">Already registered? <span @click="showLogin = true" class="underline cursor-pointer">Login</span> instead</p>
    </div>
  </div>
</template>

<script setup>
  const showLogin = ref(true)
</script>