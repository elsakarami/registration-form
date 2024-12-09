import { ref } from 'vue'
import axios from 'axios'

export function useAxios<T>() {
  const data = ref<T | null>(null)
  const error = ref<string | null>(null)
  const loading = ref<boolean>(false)
  const fetchData = async (url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', requestData?: any, dataKey?: string) => {
    loading.value = true
    error.value = null

    try {
      const response = await axios({
        method,
        url,
        data: requestData
      })
      data.value = dataKey ? response.data[dataKey] : response.data
    } catch (err: any) {
    error.value = err.response?.data?.message || err.message
      console.error('Axios error:', error.value)
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, fetchData }
}