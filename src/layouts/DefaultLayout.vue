<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { RouterView } from 'vue-router'
import { useCurrencyStore } from '@/stores/currency';
import MainHeader from '@/components/layout/MainHeader.vue'

const currencyStore = useCurrencyStore()

const isLoading = ref(false)

onBeforeMount(async () => {
  isLoading.value = true

  await Promise.allSettled([
    currencyStore.getDailyCurrencies()
  ])

  isLoading.value = false
})
</script>

<template>
  <div>
    <main-header />

    <div class="w-full px-4 py-5">
      <span v-if="isLoading">Loading...</span>
      <router-view v-else />
    </div>
  </div>
</template>


<style lang="scss"></style>