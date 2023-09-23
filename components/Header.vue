<template>
  <header>
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="font-sans text-white text-xl font-extrabold">REMIND-ME</span>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" v-if="!authenticated" class="text-sm font-semibold leading-6 text-gray-900"><nuxt-link
            to="/login">Login</nuxt-link><span aria-hidden="true">&rarr;</span></a>
        <a href="#" v-if="authenticated" class="text-sm font-semibold leading-6 text-gray-900"><nuxt-link
            to="/login"><nuxt-link @click="logout">Logout</nuxt-link></nuxt-link><span
            aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
  </header>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created

const router = useRouter();


const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const logout = () => {
  logUserOut();
  router.push('/login');
};
</script>

<style>
body {
  background-color: #dfd7da
}
</style>