<script setup lang="ts">
import { computed } from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const layout = computed(() => {
  switch (route.meta.layout) {
    default: return DefaultLayout
  }
})
</script>

<template>
  <component :is="layout" />
</template>
