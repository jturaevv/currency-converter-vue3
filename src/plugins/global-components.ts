import type { App } from 'vue'

// Global components
import BaseSearchField from '@/ui/SearchField.vue'
import BaseSelectField from '@/ui/SelectField.vue'

const components = {
  BaseSearchField,
  BaseSelectField
}

export default {
  register(app: App<Element>) {
    Object.entries(components).forEach(([key, value]) => app.component(key, value))
  }
}
