import { initializeApp } from "firebase/app"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: config.public.apiBase,
    authDomain: "the-reading-dead.firebaseapp.com",
    projectId: "the-reading-dead",
    storageBucket: "the-reading-dead.appspot.com",
    messagingSenderId: "942685631059",
    appId: "1:942685631059:web:2e2b0247fce6732c3bcca6"
  }

  const app = initializeApp(firebaseConfig)

  console.log(app)
})