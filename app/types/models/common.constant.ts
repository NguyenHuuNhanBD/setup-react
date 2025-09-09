export interface IApiResponse<T> {
  result: {
    data: T
    total?: number
    status?: boolean
    isBlocked?: boolean
    isBlockedByUser?: boolean
    isBlockedBySeller?: boolean
  }
  message: string
  statusCode: number
  status?: string | number
  errorCode?: string
}
