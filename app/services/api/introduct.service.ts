import axiosClient from '~/configs/axios.config'
import { API_AUTH, API_INTRODUCE } from '~/constants/api.constant'
import type { IApiResponse, IIntroduce, IPayloadLogin, IResponseLogin, IUpserIntroduce } from '~/types'

export const IntroduceService = {
  getList: async (): Promise<IApiResponse<IIntroduce[]>> => {
    return await axiosClient.get(API_INTRODUCE.GET_LIST.URL)
  },
  create: async (payload?: IUpserIntroduce): Promise<IApiResponse<IIntroduce[]>> => {
    return await axiosClient.post(API_INTRODUCE.CREATE.URL, payload)
  }
}
