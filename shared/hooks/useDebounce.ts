import { FC, useEffect, useState } from 'react'

/**
 * useDebounce hook
 * @param {any} value - The value to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {any} - The debounced value
 */

interface DebounceProps {
  value: any
  delay: number
}

export const useDebounce = ({ value, delay }: DebounceProps) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
