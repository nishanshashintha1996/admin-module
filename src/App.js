import './App.css';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Nav from './components/nav/Nav';
import Hero from './components/home/hero/Hero';
import Section01 from './components/home/section1/Section01';
import Section02 from './components/home/section2/Section02';

const navigation = [
  { name: 'Product', href: '#ff' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="isolate hero-bg">
      <div className="px-6 pt-6 lg:px-8">
        <Nav urls={navigation}/>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      <Hero/>
      <Section01/>
      <Section02/>
    </div>
  );
}

export default App;
