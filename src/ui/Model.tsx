import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { ReactNode } from 'react'

interface IProps {
    isOpen: boolean;
    close: () => void;
    title?: string;
    children: ReactNode;
}
const MyModal = ({ isOpen, close, title, children }: IProps) => {


    return (
        <>
            <Dialog open={isOpen} className="relative z-10" onClose={close}>
                <div className="fixed inset-0 backdrop-blur-sm">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="max-w-md rounded-md bg-white p-6 backdrop-blur-2xl 
                            w-[400px] lg:w-[450px] duration-300  ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">

                            <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                                {title}
                            </DialogTitle>
                            {children}

                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default MyModal