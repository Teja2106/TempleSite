import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

export default function Admin() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

    const onSubmit = async (data: FieldValues) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);
        reset();
    }
    return (
        <>
            <div className="mt-16">
                <div className="grid laptop:grid-cols-2 pc:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
                    <div>
                        <h1 className="text-3xl font-extrabold">Create New Event </h1>
                        <p className="text-sm text-gray-400 mt-3">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.</p>
                        <div className="mt-12">
                            {/* Empty div */}
                        </div>
                    </div>
                    <form method="get" className="ml-auo space-y-4" onSubmit={ handleSubmit(onSubmit) }>
                        <input type='text' {...register("name", { required: 'This field is required.' })} placeholder='Pooja Name*' className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                        { errors.name && (<p className="text-red-500">{ `${ errors.name.message }` }</p>) }
                        <select id="dropdown" {...register("dropdown", { required: 'This field is required.' })} className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]">
                            <option value="">Event Type</option>
                            <option value="pooja">Pooja</option>
                            <option value="option2">Anadanam</option>
                            <option value="option3">Special pooja</option>
                        </select>
                        { errors.dropdown && (<p className="text-red-500">{ `${ errors.dropdown.message }` }</p>) }
                        <div> Date
                            <input  type='date' {...register('date', { required: 'This field is required.' })} placeholder='date' className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                        </div>
                        { errors.date && (<p className="text-red-500">{ `${ errors.date.message }` }</p>) }
                        <div>
                            Time
                            <input type='time' placeholder='Subject' {...register('time', { required: 'This field is required.' })} className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                        </div>
                        { errors.time && (<p className="text-red-500">{ `${ errors.time.message }` }</p>) }
                        <div>
                            Poster
                            <input type='file' placeholder='Subject' {...register('file', { required: 'This field is required.' })} className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                        </div>
                        { errors.file && (<p className="text-red-500">{ `${ errors.file.message }` }</p>) }
                        <textarea placeholder='Description' typeof='textarea'  rows={6} {...register('description', { required: 'This field is required.' })} className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>
                        { errors.description && (<p className="text-red-500">{ `${ errors.description.message }` }</p>) }   
                        <button type='submit' disabled={ isSubmitting } className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full disabled:cursor-not-allowed disabled:bg-blue-400">Publish</button>
                    </form>
                </div>
            </div>
            <br />
        </>
    )
}
