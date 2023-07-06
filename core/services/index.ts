import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'
import APIClientService from '@/core/services/modules/APIClientService.ts'
import BannerService from '@/core/services/modules/BannerService.ts'

const serviceList: coreFunctionList = [APIClientService, BannerService]

export default (context: nuxtContext) => {
  class ServicesLocator {}
  context.$services = new ServicesLocator()
  serviceList.forEach((fn) => fn(context))
}
