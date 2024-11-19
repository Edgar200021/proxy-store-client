import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Button } from '../../ui/Button'

interface Props {
  className?: string
}

export const RentProxyButton = ({ className }: Props) => {
  const [rentDays, setRentDays] = useState(1)

  console.log(rentDays)

  return (
    <div className={cn('flex flex-col gap-y-4', className)}>
      <dl className="flex flex-wrap">
        <dt className="w-1/3 ">Price Per Day</dt>
        <dd className="w-2/3 ml-auto pl-1">{rentDays * 2}$</dd>
      </dl>
      <div className="flex items-center gap-x-5 justify-between">
        <Select
          value={String(rentDays)}
          onValueChange={e => setRentDays(Number(e))}
        >
          <SelectTrigger className="w-[180px] bg-secondary">
            <SelectValue placeholder="Rent days" />
          </SelectTrigger>
          <SelectContent className="bg-primary">
            {Array.from({ length: 30 }).map((_, i) => (
              <SelectItem key={i} className="text-white" value={String(i + 1)}>
                {i + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="primary" className="self-start">
          Rent
        </Button>
      </div>
    </div>
  )
}
