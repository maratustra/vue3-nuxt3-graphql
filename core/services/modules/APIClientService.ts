import { nuxtContext } from '@nuxt/types'

export default (context: nuxtContext) => {
  class APIClientService {
    client: any

    context: nuxtContext

    constructor(client: any, context: nuxtContext) {
      this.client = client
      this.context = context
    }

    async request(data = {}) {
      return this.client.request(data)
    }
  }

  context.$services.useAPI = new APIClientService(FetchService(context), context)
}
