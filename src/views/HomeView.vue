<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCurrencyStore } from '@/stores/currency';
import CurrencyCard from '@/components/CurrencyCard/CurrencyCard.vue'

const currencyStore = useCurrencyStore()

const search = ref('')

const filteredDailyCurrencies = computed(() => {
  return currencyStore.currencies.filter((currency) => {
    const charCode = currency.CharCode.toLowerCase()
    const name = currency.Name.toLowerCase()
    const value = search.value.toLowerCase()

    return charCode.includes(value) || name.includes(value)
  })
})

</script>

<template>
  <main>
    <div class="container mx-auto">
      <base-search-field class=" w-1/2" v-model="search" :debounce="300" />

      <section class="grid gap-3 grid-cols-2 p-5 bg-primary mt-6 rounded-md">
        <template v-if="filteredDailyCurrencies.length">
          <currency-card v-for="currency in filteredDailyCurrencies" :key="currency.ID" :info="currency" />
        </template>

        <span v-else>
          List is Empty
        </span>
      </section>
    </div>
  </main>
</template>
