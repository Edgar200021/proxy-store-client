import { GET_IP_INFO_PARAM_KEY, IP_SCORE_API_URL } from '@/constants/api'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetIpInfoResponse } from './types'

export const ipScoreApi = createApi({
  reducerPath: 'ipScoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: IP_SCORE_API_URL,
  }),
  endpoints: builder => ({
    getIpInfo: builder.mutation<GetIpInfoResponse, string>({
      query: ip => {
        const formData = new FormData()

        formData.append(GET_IP_INFO_PARAM_KEY, ip)

        return {
          url: '/fulljson',
          body: formData,
          method: 'POST',
        }
      },
    }),
  }),
})

export const { useGetIpInfoMutation } = ipScoreApi
