export default function Footer() {
    return (
        <>
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-4 phone:grid-cols-1 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Company</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul>
                                <li className="mb-2"><a href="#" className="hover:text-gray-400">Home</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-400">About Us</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-400">Services</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                            <ul className="flex space-x-4">
                                <li><a href="#" className="hover:text-gray-400"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.556a9.833 9.833 0 01-2.828.775 4.942 4.942 0 002.164-2.723 9.87 9.87 0 01-3.127 1.196 4.924 4.924 0 00-8.39 4.485A13.978 13.978 0 011.671 3.149 4.918 4.918 0 003.149 9.574a4.903 4.903 0 01-2.228-.616c-.054 2.28 1.582 4.415 3.949 4.89a4.934 4.934 0 01-2.224.085 4.93 4.93 0 004.604 3.416A9.867 9.867 0 010 21.543a13.951 13.951 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.556z"></path></svg></a></li>
                                <li><a href="#" className="hover:text-gray-400"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163C6.633 2.163 2.163 6.633 2.163 12c0 4.841 3.675 8.839 8.41 9.668.613.113.838-.266.838-.59 0-.293-.011-1.073-.017-2.107-3.419.743-4.14-1.648-4.14-1.648-.557-1.416-1.36-1.794-1.36-1.794-1.112-.761.085-.746.085-.746 1.23.086 1.875 1.264 1.875 1.264 1.09 1.866 2.862 1.327 3.559 1.014.11-.79.426-1.327.774-1.63-2.73-.31-5.599-1.366-5.599-6.079 0-1.343.478-2.441 1.263-3.301-.126-.31-.548-1.56.118-3.252 0 0 1.03-.33 3.375 1.259a11.686 11.686 0 013.075-.412 11.682 11.682 0 013.075.412c2.344-1.589 3.375-1.259 3.375-1.259.666 1.692.244 2.942.118 3.252.785.86 1.263 1.958 1.263 3.301 0 4.723-2.873 5.766-5.61 6.071.438.378.825 1.124.825 2.264 0 1.635-.014 2.954-.014 3.354 0 .326.224.709.844.59C18.325 20.838 22 16.841 22 12c0-5.367-4.47-9.837-10-9.837z"></path></svg></a></li>
                                <li><a href="#" className="hover:text-gray-400"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c-5.372 0-9.837 4.465-9.837 9.837 0 5.372 4.465 9.837 9.837 9.837 5.372 0 9.837-4.465 9.837-9.837 0-5.372-4.465-9.837-9.837-9.837zm0 18.275c-4.661 0-8.438-3.777-8.438-8.438s3.777-8.438 8.438-8.438 8.438 3.777 8.438 8.438-3.777 8.438-8.438 8.438zm4.125-12.3c-.457 0-.858.18-1.14.45-.283.272-.45.683-.45 1.14 0 .457.18.858.45 1.14.272.283.683.45 1.14.45.457 0 .858-.18 1.14-.45.283-.272.45-.683.45-1.14 0-.457-.18-.858-.45-1.14-.272-.283-.683-.45-1.14-.45zm-4.125.225c-2.85 0-5.167 2.317-5.167 5.167s2.317 5.167 5.167 5.167 5.167-2.317 5.167-5.167-2.317-5.167-5.167-5.167zm0 8.663c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5 3.5 1.568 3.5 3.5-1.568 3.5-3.5 3.5z"></path></svg></a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact</h3>
                            <p className="mb-2">123 Street Name</p>
                            <p className="mb-2">City, State, 12345</p>
                            <p className="mb-2">Email: info@example.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-gray-400">
                        &copy; 2024 Your Company. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}
