<script setup lang="ts">
import { computed } from 'vue';
import type { ICurrency } from '@/services/currencies/currency'

const emit = defineEmits<{
  (event: 'update:currencyValue', val: ICurrency): void,
  (event: 'update:nominalValue', val: number): void,
}>()
const props = withDefaults(defineProps<{
  currencyValue: ICurrency,
  nominalValue: number,
  options: ICurrency[],
  readonly?: boolean,
}>(), {
  readonly: false
})

const currency = computed({
  get() {
    return props.currencyValue
  },
  set(newValue: ICurrency) {
    emit('update:currencyValue', newValue)
  }
})

const nominal = computed({
  get() {
    return props.nominalValue
  },
  set(newValue: number) {
    emit('update:nominalValue', newValue)
  }
})
</script>

<template>
  <div class="block bg-white rounded-md p-3">
    <h3 class="text-gray-500">{{ currency.Name }}</h3>

    <div class="flex mt-3">
      <base-select-field class="w-auto mr-4" v-model="currency" :options="options" item-value="ID" item-name="CharCode"
        return-object />

      <input v-model="nominal" type="number"
        class=" border-b border-gray-300 text-gray-900 text-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 read-only:focus:border-gray-300 read-only:cursor-not-allowed" :readonly="readonly">
    </div>
  </div>
</template>