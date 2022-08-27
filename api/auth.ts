import axios, { AxiosError } from 'axios'
import { useMutate } from '../hooks'
import { API_URL } from './constants'

// Query
export const useLoginMutation = (body: any) =>
  useMutate(`${API_URL}/auth/login`, body, 'POST')

export const useRegisterMutation = <T>(body: any) =>
  useMutate<T>(`${API_URL}/auth/register`, body, 'POST')
