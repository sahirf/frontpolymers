import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

export default function Navbar_() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div >
      <nav className="mx-auto flex w-screen items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-24 ">
          <Link to="/mix_polymers" className="text-sm font-semibold leading-6 text-white">
            Mix Polymers
          </Link>
          <Link to="/mix_polymers" className="text-sm font-semibold leading-6 text-white">
            Seach For Polymers
          </Link>
          <Link to="/mix_polymers" className="text-sm font-semibold leading-6 text-white">
            Find Polymers
          </Link>
        </Popover.Group>
      </nav>
      {/* AQUI EMPIEZA VISTA DE CELULAR  */}

      
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-neutral-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/mix_polymers"
                  className="-mx-3 block rounded-lg px-3 py-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Mix Polymers
                </Link>
                <Link
                  to="/mix_polymers"
                  className="-mx-3 block rounded-lg px-3 py-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Seach For Polymers
                </Link>
                <Link
                  to="/mix_polymers"
                  className="-mx-3 block rounded-lg px-3 py-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Find Polymers
                </Link>
              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}
