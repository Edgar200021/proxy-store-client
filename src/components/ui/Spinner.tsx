import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export const Spinner = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 w-10 h-10  ',
        className
      )}
    >
      <div className="loader"></div>
    </div>
  )
}
