import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'
import BannerFabric from '~/core/fabrics/modules/BannerFabric.ts'

const fabricList: coreFunctionList = [BannerFabric]

export default (context: nuxtContext) => {
  class FabricsLocator {}
  context.$fabrics = new FabricsLocator()
  fabricList.forEach((fn) => fn(context))
}
