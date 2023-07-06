import { nuxtContext } from '@nuxt/types'

import BaseCol from '@/packages/basis/components/BaseCol.vue'
import BaseContainer from '@/packages/basis/components/BaseContainer.vue'
import BaseIcon from '@/packages/basis/components/BaseIcon.vue'
import BaseLayout from '@/packages/basis/components/BaseLayout.vue'
import BaseLink from '@/packages/basis/components/BaseLink.vue'
import BaseRow from '@/packages/basis/components/BaseRow.vue'
import BaseSection from '@/packages/basis/components/BaseSection.vue'

const basisComponents = [
  { name: 'VCol', component: BaseCol },
  { name: 'VContainer', component: BaseContainer },
  { name: 'VIcon', component: BaseIcon },
  { name: 'VLayout', component: BaseLayout },
  { name: 'VLink', component: BaseLink },
  { name: 'VRow', component: BaseRow },
  { name: 'VSection', component: BaseSection }
]

export default defineNuxtPlugin((context: nuxtContext) => {
  basisComponents.forEach((packageItem) => {
    context.vueApp.component(packageItem.name, packageItem.component)
  })
})
