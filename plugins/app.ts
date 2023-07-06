import { nuxtContext } from '@nuxt/types'

import setAdapters from '@/core/adapters/index.ts'
import setApi from '@/core/api/index.ts'
import setConfigs from '@/core/configs/index.ts'
import setFabrics from '@/core/fabrics/index.ts'
import setModels from '@/core/models/index.ts'
import setServices from '@/core/services/index.ts'

export default defineNuxtPlugin((context: nuxtContext) => {
  setAdapters(context)
  setApi(context)
  setConfigs(context)
  setFabrics(context)
  setModels(context)
  setServices(context)
})
