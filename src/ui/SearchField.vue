<script setup lang="ts">
import { computed, ref } from 'vue';
import IconSearch from '@/components/icons/IconSearch.vue'

const emit = defineEmits<{
  (event: 'update:modelValue', val: string): void
  (event: 'search', val: string): void
}>()
const props = withDefaults(defineProps<{
  modelValue: string,
  placeholder?: string,
  debounce?: number
}>(), {
  placeholder: 'text something...',
  debounce: 0,
})

const timer = ref<number | null>(null)

const search = computed<string>({
  get() {
    return props.modelValue
  },
  set(newValue: string) {
    if (timer.value) clearTimeout(timer.value)

    timer.value = setTimeout(() => {
      emit('update:modelValue', newValue)
    }, props.debounce);
  }
})
</script>

<template>
  <div class="relative flex">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <icon-search class="text-primary" />
    </div>
    <input type="search" v-model="search"
      class="flex-1 p-4 pl-10 text-sm border border-primary outline-none rounded-lg focus:border-primary"
      :placeholder="placeholder">
  </div>
</template>