export default function Cards() {
    return (
        <>
            <div className="grid grid-cols-2 gap-6 p-6 phone:grid phone:grid-cols-1 max-w-screen-lg">
                <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
                    <h2 className="text-2xl font-bold mb-2">Seva</h2>
                    <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center">
                        View more
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
                <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
                    <h2 className="text-2xl font-bold mb-2">Gowshala</h2>
                    <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center">
                        View more
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
                <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
                    <h2 className="text-2xl font-bold mb-2">Shop</h2>
                    <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center">
                        View more
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
                <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
                    <h2 className="text-2xl font-bold mb-2">Nandhi Abhishekam</h2>
                    <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center">
                        View more
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}
