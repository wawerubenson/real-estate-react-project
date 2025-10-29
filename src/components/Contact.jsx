import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "1456459e-12cf-4952-b4c7-030529e5ffde");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            toast.success("Submitted successfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
            setResult("");
        }
    };

    return (
        <div className='text-center p-6 py-20 lg:px-32 w-full' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
            <p className='text-center text-gray-500 max-w-80  mb-12 mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8' action="">
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' name='Name' type="text" placeholder='Enter your name...' />
                    </div>

                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Your Email
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' name='Email' type="email" placeholder='Enter your name...' />
                    </div>

                </div>

                <div className='my-6 text-left'>
                    Message
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none ' name="Message" placeholder="Enter Message" required></textarea>
                </div>

                <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ? result : "Send Message"}</button>
            </form>
        </div>
    )
}

export default Contact
