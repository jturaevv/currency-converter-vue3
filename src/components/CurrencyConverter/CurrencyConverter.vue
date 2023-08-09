<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useCurrencyStore } from '@/stores/currency';
import ConverterCard from '@/components/CurrencyConverter/CurrencyConverterCard.vue'
import IconArrow from '@/components/icons/IconArrow.vue'

const currencyStore = useCurrencyStore()

const form = reactive({
  source: currencyStore.currencies[0],
  target: currencyStore.currencies[1],
  sourceNominal: 1
})

const sourceOptions = computed(() => {
  return currencyStore.currencies.filter(({ CharCode }) => CharCode !== form.target.CharCode)
})
const targetOptions = computed(() => {
  return currencyStore.currencies.filter(({ CharCode }) => CharCode !== form.source.CharCode)
})
const targetNominal = computed(() => {
  if (!form.sourceNominal) return form.sourceNominal

  const sourceNominalPerRub = form.source.Value / form.source.Nominal
  const targetNominalPerRub = form.target.Value / form.target.Nominal
  const result = form.sourceNominal * sourceNominalPerRub / targetNominalPerRub

  return Number(result.toFixed(2))
})

function switchConverter() {
  form.sourceNominal = targetNominal.value;
  [form.source, form.target] = [form.target, form.source]
}
</script>

<template>
  <div class="flex justify-center items-center">
    <converter-card v-model:currencyValue="form.source" v-model:nominalValue="form.sourceNominal"
      :options="sourceOptions" />

    <button class="flex justify-center items-center bg-white mx-5 text-primary rounded-full w-10 h-10 transition-all duration-75 active:rotate-180"
      @click="switchConverter">
      <icon-arrow class="w-7 h-7" />
    </button>

    <converter-card v-model:currencyValue="form.target" :nominalValue="targetNominal" :options="targetOptions" readonly />
  </div>
</template>