import type { AxiosInstance, AxiosPromise } from 'axios'
import { AbstractService } from '@/common/abstract'
import type { IDailyCurrency } from './currency'
import { currencyClient } from '@/plugins/client'

class CurrencyService extends AbstractService {
  constructor(apiClient: AxiosInstance) {
    super(apiClient)
  }

  getDaily(): AxiosPromise<IDailyCurrency> {
    return this.apiClient.get('/daily_json.js')
  }
}

export const CurrencyServiceImpl = new CurrencyService(currencyClient)