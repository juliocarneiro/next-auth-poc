export interface IButtonProps {
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
  quaternary?: boolean
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  text: string
  cta?: boolean
  isLoading?: boolean
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
}
