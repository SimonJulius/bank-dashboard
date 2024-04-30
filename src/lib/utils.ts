import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumber = (number: number) => {
  const value = number.toLocaleString('en-NG')

  const stringWithoutCommas = value.replace(/,/g, '')

  if (stringWithoutCommas.length === 6) {
    const part1 = stringWithoutCommas.substring(0, 3)
    const part2 = stringWithoutCommas.substring(3)
    return `${part1} ${part2}`
  } else if (stringWithoutCommas.length === 7) {
    const part1 = stringWithoutCommas.substring(0, 4)
    const part2 = stringWithoutCommas.substring(4)
    return `${part1} ${part2}`
  }

  return value
}
