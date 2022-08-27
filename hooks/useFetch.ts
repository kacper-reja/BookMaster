import { useState, useEffect } from 'react'
import axios from 'axios'
export const useFetch = <T>(
  url: string,
  api_token?: string,
  isEnabled?: boolean
) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState<T | null>(null)

  const fetchData = async () => {
    try {
      console.log({ x: api_token })
      const response = await axios.get(
        `${url}${api_token ? '?api_token=' + api_token : ''}`
      )
      setData(response.data)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsError(false)
    setIsLoading(true)
    fetchData()
  }, [isEnabled])
  return { isError, isLoading, data }
}

type ISucess = (x: any) => void
type IError = (x: any) => void
export const useMutate = <T>(
  url: string,
  body: any,
  method: 'POST' | 'PUT' | 'DELETE',
  api_token?: string
) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const mutate = async (onSuccess: ISucess, onError: IError) => {
    try {
      const response = await axios({
        method: method.toLowerCase(),
        url: `${url}${api_token ? '?api_token=' + api_token : ''}`,
        data: body,
      })
      onSuccess(response.data)
    } catch (error) {
      console.log(error)
      onError(error)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return { isError, isLoading, mutate }
}
