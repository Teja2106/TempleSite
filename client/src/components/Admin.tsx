export default function Admin() {
    return (
        <>
            <div className="mt-16">
                <div
                    className="grid laptop:grid-cols-2 pc:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
                    <div>
                        <h1 className="text-3xl font-extrabold">Create New Event </h1>
                        <p className="text-sm text-gray-400 mt-3">Have some big idea or brand to develop and need help? Then reach
                            out we'd love to hear about your project and provide help.</p>
                        <div className="mt-12">

                        </div>

                    </div>

                    <form action="submit" method="post" className="ml-auo space-y-4">


                        <input type='text' name="name" placeholder='Pooja Name*'
                            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />

                        <select id="dropdown" name="dropdown"
                            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]">
                            <option value="">Event Type</option>
                            <option value="pooja">Pooja</option>
                            <option value="option2">Anadanam</option>
                            <option value="option3">Special pooja</option>
                        </select>

                        <div> Date
                            <input type='date' name='date' placeholder='date'
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                        </div>
                        <div>
                            Time
                            <input type='time' placeholder='Subject' name='subject'
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                        </div>

                        <div>
                            Poster
                            <input type='file' placeholder='Subject' name='subject'
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                        </div>

                        <textarea placeholder='Description' rows={6} name='description'
                            className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>
                        <button type='button' className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Publish</button>
                    </form>
                </div>
            </div>
            <br />
        </>
    )
}
