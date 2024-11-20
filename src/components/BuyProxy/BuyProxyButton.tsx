import { Button } from '../ui/Button'

interface Props {
  className?: string
}

export const BuyProxyButton = ({ className }: Props) => {
  return (
    <Button className={className} variant="primary">
      Buy
    </Button>
  )
}
