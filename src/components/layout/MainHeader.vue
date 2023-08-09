<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ROUTES } from '@/common/routes';

const navigations = [
  {
    name: 'Home',
    path: ROUTES.HOME,
  },
  {
    name: 'Converter',
    path: ROUTES.CONVERTER,
  }
]
</script>

<template>
  <header class="w-full bg-primary py-3 px-5">
    <div class="container mx-auto">
      <nav class="flex justify-center gap-3 text-gray-300">
        <template v-for="navigation in navigations" :key="navigation.path">
          <router-link class="font-semibold text-2xl" exact-active-class="text-white border-b-2" :to="navigation.path">
            {{ navigation.name }}
          </router-link>
        </template>
      </nav>
    </div>
  </header>
</template>
