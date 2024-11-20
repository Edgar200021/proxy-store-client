import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

const buttonVariants = {
  clear:
    'inline-block bg-none border-none hover:translate-y-[-5px] active:translate-y-[-2px] transition-translate duration-300 ease',
  primary:
    'bg-[#1C64F2] text-white text-xl font-bold inline-flex items-center justify-center py-1 px-5 rounded-md',
}

interface Props extends ComponentProps<'button'> {
  className?: string
  variant?: keyof typeof buttonVariants
}

export const Button = ({
  className,
  variant = 'clear',
  children,
  ...otherProps
}: Props) => {
  return (
    <button className={cn(buttonVariants[variant], className)} {...otherProps}>
      {children}
    </button>
  )
}
