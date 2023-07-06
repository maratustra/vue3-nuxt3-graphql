import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'
import BannerMethods from '@/core/api/modules/BannerMethods.ts'

const apiList: coreFunctionList = [BannerMethods]

export default (context: nuxtContext) => {
  class ApiLocator {}
  context.$api = new ApiLocator()
  apiList.forEach((fn) => fn(context))
}
