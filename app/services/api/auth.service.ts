import axiosClient from '~/configs/axios.config'
import { API_AUTH } from '~/constants/api.constant'
import type { IApiResponse, IPayloadLogin, IResponseLogin } from '~/types'

export const AuthService = {
  login: async (payload?: IPayloadLogin): Promise<IApiResponse<IResponseLogin>> => {
    return await axiosClient.post(API_AUTH.LOGIN.URL, payload)
  },
  test: async (): Promise<IApiResponse<any>> => {
    return await axiosClient.get(API_AUTH.LOGIN.URL)
  }
}
