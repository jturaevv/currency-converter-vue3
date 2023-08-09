import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { IDailyCurrency } from '@/services/currencies/currency'
import { CurrencyServiceImpl } from '@/services/currencies/currency-service'

export const useCurrencyStore = defineStore('currency', () => {
  const dailyCurrencies = ref<IDailyCurrency>()

  async function getDailyCurrencies() {
    try {
      const { data } = await CurrencyServiceImpl.getDaily()
      dailyCurrencies.value = data
    } catch (error) {
      console.log('error getDailyCurrencies:>> ', error)
    }
  }

  const currencies = computed(() => {
    if (!dailyCurrencies.value) return []

    return Object.values(dailyCurrencies.value.Valute)
  })

  return { dailyCurrencies, currencies, getDailyCurrencies }
})
