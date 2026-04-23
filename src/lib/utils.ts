import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: string) {
  if (currency === 'XOF') {
    return new Intl.NumberFormat('fr-SN', { style: 'currency', currency: 'XOF' }).format(price);
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(price);
}
