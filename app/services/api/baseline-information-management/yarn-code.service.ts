import axiosClient from '~/configs/axios.config'
import { API_AUTH } from '~/constants/api.constant'
import type { IApiResponse, IYarnCode } from '~/types'

export const YarnCodeService = {
  GetList: async (): Promise<IApiResponse<IYarnCode>> => {
    return await axiosClient.get(API_AUTH.LOGIN.URL)
  }
}
