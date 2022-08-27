import axios, { AxiosError } from 'axios'
import { useMutate, useFetch } from '../hooks'
import { API_URL } from './constants'

export const useAddBookMutation = <T>(body: any, token: string) => {
  return useMutate<T>(`${API_URL}/books/new`, body, 'POST', token)
}

export const useUpdateBookMutation = <T>(
  body: any,
  token: string,
  id: string
) => {
  return useMutate<T>(`${API_URL}/books/update/${id}`, body, 'PUT', token)
}

export const useDeleteBookMutation = <T>(token: string, id: string) => {
  return useMutate<T>(`${API_URL}/books/delete/${id}`, {}, 'DELETE', token)
}

export const useGetAllBooksQuery = (token: string, isEnabled: boolean) =>
  useFetch(`${API_URL}/books`, token, isEnabled)

export const useGetBookDetailsQuery = (
  token: string,
  id: string,
  isEnabled: boolean
) => useFetch(`${API_URL}/books/${id}`, token, isEnabled)
