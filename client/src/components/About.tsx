import image from '../assets/img/About.jpg';
export default function About() {
    return (
        <div className='mt-10'>
            <div className="flex items-center pc:p-7 laptop:p-5 phone:p-5">
                <div className='pc:pl-16 laptop:pr-5 flex-1 phone:pr-5 phone:flex-1'>
                    <h2 className='font-extrabold text-[55px] phone:text-[35px]'>About</h2>
                    <p className='pc:text-2xl phone:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="flex flex-1 laptop:justify-center">
                    <img src={ image } alt="About Image." className='h-[434px] rounded-xl phone:h-[234px]'/>
                </div>
            </div>
        </div>
    )
}
