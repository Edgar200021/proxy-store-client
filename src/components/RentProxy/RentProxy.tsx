import { cn } from '@/lib/utils'
import { RentProxyButton } from './RentProxyButton'

interface Props {
  className?: string
}

export const RentProxy = ({ className }: Props) => {
  return (
    <div className={cn('max-w-[400px] bg-primary', className)}>
      <span className="block uppercase mb-5 text-xl">Verify proxy rent</span>
      <div className="flex flex-col gap-y-1 mb-4">
        <dl className="flex flex-wrap">
          <dt className="w-1/3">ID</dt>
          <dd className="w-2/3 ml-auto pl-1">13224</dd>
        </dl>
        <dl className="flex flex-wrap">
          <dt className="w-1/3"> Proxy IP</dt>
          <dd className="w-2/3 ml-auto pl-1">98.32.229.•••</dd>
        </dl>
        <dl className="flex flex-wrap">
          <dt className="w-1/3">Connect string</dt>
          <dd className="w-2/3 ml-auto pl-1">••••:••••@•••.•••.•••.•••:••••</dd>
        </dl>
      </div>
      <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-col gap-y-1 mb-4">
        <dl className="flex flex-wrap">
          <dt className="w-1/3">Country</dt>
          <dd className="w-2/3 ml-auto pl-1">United States of America</dd>
        </dl>
        <dl className="flex flex-wrap">
          <dt className="w-1/3">State</dt>
          <dd className="w-2/3 ml-auto pl-1">Illinois</dd>
        </dl>
        <dl className="flex flex-wrap">
          <dt className="w-1/3">City</dt>
          <dd className="w-2/3 ml-auto  pl-1">Schaumburg</dd>
        </dl>
        <dl className="flex flex-wrap">
          <dt className="w-1/3">ZIP</dt>
          <dd className="w-2/3 ml-auto pl-1">60159</dd>
        </dl>
      </div>
      <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      <RentProxyButton />
    </div>
  )
}
