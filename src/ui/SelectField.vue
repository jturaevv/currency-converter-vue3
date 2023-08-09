<script setup lang="ts">
import { computed } from 'vue';

const emit = defineEmits<{
  (event: 'update:modelValue', val: any): void,
}>()
const props = withDefaults(defineProps<{
  modelValue: any,
  options: any[],
  itemValue?: string,
  itemName?: string,
  returnObject?: boolean
}>(), {
  itemValue: 'value',
  itemName: 'name',
  returnObject: false,
})

const selectedValue = computed({
  get() {
    if (!props.modelValue) return props.modelValue

    return props.returnObject ? props.modelValue[props.itemValue] : props.modelValue
  },
  set(newValue: any) {
    if (props.returnObject) {
      const selelctedObject = props.options.find(option => option[props.itemValue] === newValue)
      emit('update:modelValue', selelctedObject)
    } else emit('update:modelValue', newValue)
  }
})
</script>

<template>
  <select v-model="selectedValue" placeholder="test"
    class="bg-white border-b border-gray-300 text-gray-900 text-sm outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    <template v-for="option, index in options" :key="option[itemValue]">
      <option :value="option[itemValue]">
        <slot :option="option" :index="index">{{ option[itemName] }}</slot>
      </option>
    </template>
  </select>
</template>