import { cn } from '@/lib/utils'
import { useGetIpInfoMutation } from '@/store/ipScore/ipScoreApi'
import { Spinner } from '@/ui/Spinner'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

interface Props {
  className?: string
  ip: string
  closeFn?: () => void
}

export const ProxyInfo = ({ className, ip, closeFn }: Props) => {
  const [getProxyInfo, { isLoading, isError, data, error }] =
    useGetIpInfoMutation()

  useEffect(() => {
    if (!ip) return
    ;(async () => {
      try {
        await getProxyInfo(ip).unwrap()
      } catch (error) {
        console.error(error)
        toast.error('Something went wrong')
        closeFn?.()
      }
    })()
  }, [ip])

  if (isError) {
    console.log(error)
  }

  if (data) {
    console.log(data)
  }

  return (
    <div className={cn('max-w-[400px] bg-primary relative ', className)}>
      {isLoading && <Spinner />}
      {data && (
        <>
          <span className="block uppercase mb-5 text-xl">Proxy info</span>
          <div className="flex flex-col gap-y-1 mb-4">
            <dl className="flex flex-wrap">
              <dt className="w-1/3">ID</dt>
              <dd className="w-2/3 ml-auto pl-1">13224</dd>
            </dl>
            <dl className="flex flex-wrap">
              <dt className="w-1/3"> Proxy IP</dt>
              <dd className="w-2/3 ml-auto pl-1">{data.ip}</dd>
            </dl>
          </div>
          <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="flex flex-col gap-y-1 mb-4">
            <dl className="flex flex-wrap">
              <dt className="w-1/3">Country</dt>
              <dd className="w-2/3 ml-auto pl-1">{data.geoip1.country}</dd>
            </dl>
            <dl className="flex flex-wrap">
              <dt className="w-1/3">State</dt>
              <dd className="w-2/3 ml-auto pl-1">{data.geoip1.region}</dd>
            </dl>
            <dl className="flex flex-wrap">
              <dt className="w-1/3">City</dt>
              <dd className="w-2/3 ml-auto  pl-1">{data.geoip2.city}</dd>
            </dl>
            <dl className="flex flex-wrap">
              <dt className="w-1/3">ZIP</dt>
              <dd className="w-2/3 ml-auto pl-1">{data.zip}</dd>
            </dl>
          </div>
          <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <span className="text-lg mb-2">Blacklists</span>
          <ul className="pl-2">
            {Object.entries(data.blacklists).map(([key, value], i) => (
              <li key={i}> 
                <dl className="flex flex-wrap">
                  <dt className="w-1/2">{key}</dt>
                  <dd className="w-1/2 ml-auto pl-1">{value}</dd>
                </dl>
              </li>
            ))}
          </ul>
        </>
      )}
      {/*<div className="mb-4">
        <dl className="flex flex-wrap">
          <dt className="w-1/3">Total Price</dt>
          <dd className="w-2/3 ml-auto pl-1">20$</dd>
        </dl>
      </div>*/}
    </div>
  )
}
