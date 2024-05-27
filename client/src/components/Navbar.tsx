import logo from '../assets/img/logo.png'
export default function Navbar() {
  return (
    <>
        <nav className="bg-[#fffae9] h-[102px] flex justify-between items-center sticky top-0 z-50">
            <div>
                <img src={ logo } alt="templeImage" className=' h-20 rounded-[50%] ml-10'/>
            </div>
            <strong className='text-[20px] pc:pr-[830px] laptop:pr-[190px]'>Pallikondeshwara Swamy Devasthanam</strong>

            <ul className='flex gap-10 pr-16'>
              <li>
                <strong className='text-[18px]'><a href="#">Donation</a></strong>
              </li>

              <li>
                <strong className='text-[18px]'><a href="#">Booking</a></strong>
              </li>

              <li>
                <strong className='text-[18px]'><a href="#">Darshan</a></strong>
              </li>

              <li>
                <strong className='text-[18px]'><a href="#">Contact</a></strong>
              </li>

              <li>
                <strong className='text-[18px]'><a href="#">Alerts</a></strong>
              </li>
            </ul>
        </nav>
    </>
  )
}
