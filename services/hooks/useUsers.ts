import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from '../users'

export const useUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => getAllUsers(),
  })

  return { users: data, isLoading }
}
