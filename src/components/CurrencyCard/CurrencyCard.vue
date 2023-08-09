<script setup lang="ts">
import { computed } from 'vue';
import type { ICurrency } from '@/services/currencies/currency'
import IconArrow from '@/components/icons/IconArrow.vue'

const props = defineProps<{
  info: ICurrency
}>()

const costDiff = computed(() => (props.info.Value - props.info.Previous).toFixed(4))
const isDecresed = computed(() => parseInt(costDiff.value) > 0)
</script>

<template>
  <div class="w-full rounded-md p-3 bg-white">
    <h2 class="text-gray-500 mb-3">{{ info.Name }}</h2>

    <div class="flex">
      <p class="mr-5">{{ `${info.Nominal} ${info.CharCode}` }}</p>
      <p class="mr-5">{{ info.Value }} RUB</p>

      <div :class="['flex ml-auto', isDecresed ? 'text-[#13c913]' : 'text-[#ff0000]']">
        <icon-arrow :class="['mr-2', isDecresed ? '-rotate-90' : 'rotate-90']" />
        <span>{{ costDiff }}</span>
      </div>
    </div>
  </div>
</template>