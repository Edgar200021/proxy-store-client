'use client'

import { cn } from '@/lib/utils'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface Props {
  children: ReactNode
}

interface ModalContext {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
}

const modalContext = createContext<ModalContext | null>(null)

export const Modal = ({ children }: Props) => {
  const [name, setName] = useState('true')

  return (
    <modalContext.Provider value={{ name, setName }}>
      {children}
    </modalContext.Provider>
  )
}

interface OpenProps {
  renderTrigger: (openFn: () => void) => ReactNode
  name: string
}

const Trigger = ({ renderTrigger, name }: OpenProps) => {
  const { setName } = useModal()

  const open = () => {
    setName(name)
  }

  return renderTrigger(open)
}

interface ContentProps {
  renderContent: (closeFn: () => void) => ReactNode
  name: string
  opened?: boolean
  className?: string
}

const Content = ({ renderContent, name, opened, className }: ContentProps) => {
  const { name: modalName, setName } = useModal()

  const onClose = () => {
    setName('')
  }

  useEffect(() => {
    if (opened === undefined) return

    setName(name)
  }, [name, opened])

  return (
    <Dialog
      open={name === modalName}
      onClose={onClose}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-secondary bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel
            transition
            className={cn(
              'relative transform overflow-hidden rounded-lg bg-primary px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-full max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95',
              className
            )}
          >
            {renderContent(onClose)}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

Modal.Trigger = Trigger
Modal.Content = Content

const useModal = () => {
  const ctx = useContext(modalContext)

  if (!ctx) throw new Error('Modal must be used within a ModalProvider')

  return ctx
}
