import { useState } from 'react';
import logo from '../assets/img/logo.jpg';

export default function Navbar() {
  const [phoneCloseBtn, setPhoneCloseBtn] = useState('phone:hidden');
  const [phoneBurgerBtn, setPhoneBurgerBtn] = useState('');
  const [tabCloseBtn, setTabCloseBtn] = useState('tab:hidden');
  const [tabBurgerBtn, setTabBurgerBtn] = useState('');
  const openToggle = () => {
    const sideNav = document.getElementById('sideNav');
    if(sideNav?.classList.contains('phone:w-0') && sideNav.classList.contains('tab:w-0')) {
      sideNav.classList.remove('phone:w-0');
      sideNav.classList.remove('tab:w-0');
      sideNav.classList.add('phone:w-full');
      sideNav.classList.add('tab:w-full');
      setPhoneCloseBtn('');
      setPhoneBurgerBtn('phone:hidden');
      setTabCloseBtn('');
      setTabBurgerBtn('tab:hidden');
    }
  }

  const closeToggle = () => {
    const sideNav = document.getElementById('sideNav');
    if(sideNav?.classList.contains('phone:w-full')) {
      sideNav.classList.remove('phone:w-full');
      sideNav.classList.remove('tab:w-full');
      sideNav.classList.add('phone:w-0');
      sideNav.classList.add('tab:w-0');
      setPhoneCloseBtn('phone:hidden')
      setPhoneBurgerBtn('');
      setTabCloseBtn('tab:hidden');
      setTabBurgerBtn('');
    }
  }
  return (
    <>
      <nav className='bg-white max-w-full flex justify-between pc:h-24 laptop:h-20 tab:h-20 phone:h-16 items-center'>

        <div className='flex items-center gap-3'>
          <img src={logo} alt="" className='pc:h-20 laptop:h-16 tab:h-16 phone:h-12 rounded-full ml-10 phone:ml-2' />
          <a className="text-l font-bold leading-6 text-grey">Sri Pallikondeswara Swamy Devastanam</a>
        </div>

        <div className={`pc:hidden laptop:hidden ${ phoneBurgerBtn } ${ tabBurgerBtn }`} onClick={ openToggle }>
          <button type="button" className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            id="mainmenu">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
              aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        <div className={`pc:hidden laptop:hidden ${ phoneCloseBtn } ${ tabCloseBtn }`} onClick={ closeToggle }>
          <button type="button" className="rounded-md p-2.5 text-gray-700" id="dismissButton">
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
              aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div id='sideNav' className='phone:bg-white tab:bg-white phone:fixed tab:fixed phone:right-0 tab:right-0 phone:top-16 tab:top-16 phone:h-full tab:h-full phone:w-0 tab:w-0 phone:z-[1] tab:z-[1] phone:overflow-x-hidden tab:overflow-x-hidden '>
          <ul className='pc:flex laptop:flex tab:flex-col laptop:items-center phone:flex-col'>
            <li className='m-7 tab:m-16'>
              <div>
                <a href="#" className="text-sm font-semibold leading-6 text-grey">Darshan </a>
                🙏🏻
              </div>
            </li>

            <li className='m-7 tab:m-16'>
              <a href="#" className="flex items-center text-sm font-semibold leading-6 text-grey">Booking
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-1 size-6">
                  <path
                    d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                  <path fillRule="evenodd"
                    d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                    clipRule="evenodd" />
                </svg>
              </a>
            </li>

            <li className='m-7 tab:m-16'>
              <a href="#" className="flex items-center text-sm font-semibold leading-6 text-grey">
                Contact
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-1 size-6">
                  <path fillRule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
                    clipRule="evenodd" />
                </svg>
              </a>
            </li>

            <li className='m-7 tab:m-16'>
              <a href="/login" className="flex items-center text-sm font-semibold leading-6 text-grey">Donate
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="mx-1 size-6">
                  <path
                    d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </a>
            </li>

            <li className='m-7 tab:m-16'>
              <a href="#" className="flex items-center text-sm font-semibold leading-6 text-grey">Log in
                <span aria-hidden="true">&rarr;</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}