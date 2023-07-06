import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'
import BannerAdapter from '@/core/adapters/modules/BannerAdapter.ts'

const adapterList: coreFunctionList = [BannerAdapter]

export default (context: nuxtContext) => {
  class AdaptersLocator {}

  context.$adapters = new AdaptersLocator()
  adapterList.forEach((fn) => fn(context))
}
