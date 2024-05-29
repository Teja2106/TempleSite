import logo from '../assets/img/logo.png'
export default function Navbar() {
  return (
    <>
        <nav className="bg-[#fffae9] h-[102px] w-full flex justify-between items-center sticky top-0 z-50">
            <div>
                <img src={ logo } alt="templeImage" className='h-20 phone:h-16 rounded-[50%] ml-10 phone:ml-6'/>
            </div>
            <strong className='pc:text-[20px] laptop:text-[20px] pc:pr-[830px] laptop:pr-[190px] phone:text-[15px'>Pallikondeshwara Swamy Devasthanam</strong>

            <ul className='flex gap-10 pr-16'>
              <li>
                <strong className='text-[18px] phone:hidden'><a href="#">Donation</a></strong>
              </li>

              <li>
                <strong className='text-[18px] phone:hidden'><a href="#">Booking</a></strong>
              </li>

              <li>
                <strong className='text-[18px] phone:hidden'><a href="#">Darshan</a></strong>
              </li>

              <li>
                <strong className='text-[18px] phone:hidden'><a href="#">Contact</a></strong>
              </li>

              <li>
                <strong className='text-[18px] phone:hidden'><a href="#">Alerts</a></strong>
              </li>
            </ul>
        </nav>
    </>
  )
}
