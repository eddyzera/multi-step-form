import { ButtonHTMLAttributes } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string,
  variant?: 'purple' | 'blue' | 'transparent'
  shape?: 'button' | 'anchor'
}