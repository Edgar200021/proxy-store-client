import { useSearchParams } from 'react-router-dom'

export const useQueryParams = <T extends string[]>(
  ...keys: T
): {
  params: Partial<Record<T[number], string>>
  set: (key: T[number] | string, value: string) => void
  remove: (key: T[number] | string) => void
} => {
  const [searchParams, setSearchParams] = useSearchParams()
  const params = new Map()

  keys.forEach(key => {
    const value = searchParams.get(key)

    if (value === null || !value.trim()) return

    params.set(key, value)
  })

  const set = (key: T[number] | string, value: string) => {
    searchParams.set(key, value)
    setSearchParams(searchParams)
  }

  const remove = (key: T[number] | string) => {
    if (params.delete(key)) {
      setSearchParams(searchParams)
    }
  }

  return { params: Object.fromEntries(params), set, remove }
}
