import { cn } from '@/lib/utils'
import { Button } from '@headlessui/react'
import sprites from '../../assets/icons/sprites.svg'
import {
  BUY_PROXY_MODAL,
  PROXY_INFO_MODAL,
  RENT_PROXY_MODAL,
} from '../../constants/modal'
import { TABLE_HEADER } from '../../constants/table'
import { BuyProxy } from '../BuyProxy/BuyProxy'
import { Modal } from '../Modal/Modal'
import { Pagination } from '../Pagination/Pagination'
import { ProxyInfo } from '../ProxyInfo/ProxyInfo'
import { RentProxy } from '../RentProxy/RentProxy'

interface Props {
  className?: string
}

export const ProxyTable = ({ className }: Props) => {
  //  const [isLoading, setIsLoading] = useState(false)
  //  const [isError, setIsError] = useState(false)
  //  const [isFetching, setIsFetching] = useState(false)

  //  if (isLoading) return <PageSpinner />
  //  if (isError) return <DisplayErrorMessage />

  //  if (!data?.data.length)
  //    return (
  //      <h1 className="text-5xl h-[400px] flex items-center justify-center text-center">
  //        {search
  //          ? 'Пользователь с таким именем не существует'
  //          : 'На данный момент нету пользователей'}
  //      </h1>
  //    )

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div className="mini-tablet:overflow-x-scroll min-w-[600px] mini-tablet:whitespace-nowrap mini-tablet:min-w-[100px] w-full  ">
        <table
          className={cn('mb-28 min-w-full break-words table-fixed ', {
            //'opacity-50': isFetching,
            'opacity-50': false,
          })}
        >
          <thead className="w-full py-[14px] rounded-primary px-0 md-phone:px-2 font-medium text-sm mini-tablet:text-xs text-gray-200 block bg-primary mb-[14px]">
            <tr className="grid grid-cols-5 mini-tablet:grid-cols-[repeat(5,100px)] md-phone:grid-cols-[repeat(5,50px)] md-phone:gap-x-6 ">
              {TABLE_HEADER.map(val => (
                <th
                  //  className={cn({
                  //    'col-span-2': val.toLowerCase() === 'email',
                  //    'flex justify-center gap-x-2 ':
                  //      val.toLowerCase() === 'токены',
                  //  })}
                  key={val}
                >
                  {val}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="block text-sm mini-tablet:text-xs">
            {[...Array(20)].map((_, index) => {
              return (
                <tr
                  key={index}
                  className="grid grid-cols-5 text-center py-[17px] border-b-[1px] border-primary mini-tablet:gap-x-0 mini-tablet:grid-cols-[repeat(5,100px)] md-phone:grid-cols-[repeat(5,50px)] md-phone:gap-x-6"
                >
                  {/*<td>127.0.0.1</td>*/}
                  <td className="text-wrap">Country</td>
                  <td className="text-wrap">State</td>
                  <td className="">Armenia</td>
                  <td>Zip</td>
                  <td>
                    <div className="flex gap-x-1 justify-center items-center ">
                      <Modal>
                        <Modal.Trigger
                          name={BUY_PROXY_MODAL}
                          renderTrigger={openModal => (
                            <Button
                              onClick={openModal}
                              title="Buy"
                              //  disabled={isFetching}
                              disabled={false}
                              className="max-w-5 w-full h-5 shrink-0 inline-flex items-center justify-center  gap-x-1 text-[#1C64F2] "
                            >
                              <svg className="w-5 h-5">
                                <use xlinkHref={`${sprites}#buy`}></use>
                              </svg>
                            </Button>
                          )}
                        />
                        <Modal.Content
                          name={BUY_PROXY_MODAL}
                          renderContent={closeModal => (
                            <BuyProxy closeFn={closeModal} />
                          )}
                        />
                      </Modal>
                      <Modal>
                        <Modal.Trigger
                          name={RENT_PROXY_MODAL}
                          renderTrigger={openModal => (
                            <Button
                              onClick={openModal}
                              title="Rent"
                              //  disabled={isFetching}
                              disabled={false}
                              className="max-w-6 w-full h-5 shrink-0 inline-flex items-center justify-center gap-x-1 text-[#1C64F2] "
                            >
                              <svg className="w-6 h-6">
                                <use xlinkHref={`${sprites}#rent`}></use>
                              </svg>
                            </Button>
                          )}
                        />
                        <Modal.Content
                          name={RENT_PROXY_MODAL}
                          renderContent={closeModal => (
                            <RentProxy closeFn={closeModal} />
                          )}
                        />
                      </Modal>

                      <Modal>
                        <Modal.Trigger
                          name={PROXY_INFO_MODAL}
                          renderTrigger={openModal => (
                            <Button
                              onClick={openModal}
                              title="Check"
                              //  disabled={isFetching}
                              disabled={false}
                              className="max-w-6 w-full h-5 shrink-0 inline-flex items-center justify-center  gap-x-1 text-[#1C64F2] "
                            >
                              <svg className="w-4 h-4">
                                <use xlinkHref={`${sprites}#check`}></use>
                              </svg>
                            </Button>
                          )}
                        />
                        <Modal.Content
                          name={PROXY_INFO_MODAL}
                          renderContent={closeModal => (
                            <ProxyInfo
                              className="min-h-[400px]"
                              closeFn={closeModal}
                              ip="87.241.144.171"
                            />
                          )}
                        />
                      </Modal>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Pagination
          className="absolute bottom-10 left-[50%] translate-x-[-50%]"
          pageCount={5}
        />
      </div>
    </div>
  )
}
