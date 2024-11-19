import { ProxyTable } from '../components/ProxyTable/ProxyTable'

interface Props {
  className?: string
}

export const MainPage = ({ className }: Props) => {
  return (
    <main className={className}>
      <section className='pt-20'>
        <div className="box pb-10 overflow-hidden relative md-phone:px-0 ">
          <div className="px-8 py-3 bg-secondary rounded-primary relative min-h-[calc(100svh-120px)] mini-tablet:min-h-[calc(100svh-80px)]">
            <ProxyTable />
          </div>
        </div>
      </section>
    </main>
  )
}
