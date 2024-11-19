import { cn } from '@/lib/utils'
import { memo } from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import { useQueryParams } from '../../hooks/useQueryParams'

interface Props extends ReactPaginateProps {
  className?: string
}

export const Pagination = memo(({ className, ...rest }: Props) => {
  const {
    params: { page: queryPage },
    set,
  } = useQueryParams('page')

  function handleChangePage({ selected }: { selected: number }) {
    set('page', (selected + 1).toString())
  }

  const page =
    !queryPage ||
    Object.is(NaN, Number(queryPage)) ||
    !Number.isInteger(Number(queryPage)) ||
    Number(queryPage) <= 0
      ? 1
      : queryPage

  if (rest.pageCount <= 1) return null

  return (
    <ReactPaginate
      className={cn(' flex items-center justify-center ', className)}
      breakLabel="...."
      nextLabel={<span>&#8594;</span>}
      nextClassName="text-gray-200 ml-[14px]"
      previousClassName="text-gray-200 mr-[14px]"
      previousLabel={<span>&#8592;</span>}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      onPageChange={handleChangePage}
      pageClassName="w-10 h-10 flex items-center justify-center"
      breakClassName="w-10 h-10 flex items-center justify-center"
      activeClassName="bg-[#1C64F2] rounded-[8px]"
      initialPage={Number(page || 0) <= 0 ? 0 : Number(page) - 1}
      previousLinkClassName={cn({
        hidden: Number(page || 0) <= 0 || Number(page) === 1,
      })}
      nextLinkClassName={cn({
        hidden: rest.pageCount === Number(page || 1),
      })}
      {...rest}
    />
  )
})
