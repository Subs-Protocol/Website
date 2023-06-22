import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from "../styles/style";


interface FormData {
  Name: string;
  Message: string;
  email: string;
}

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    Name: '',
    Message: '',
    email: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Configure emailjs with your service ID, template ID, and user ID
    const serviceId = 'service_ywklrro';
    const templateId = 'template_u8gi8wf';
    const userId = 'dZIn2A_BLgxYDEciv';

    // Prepare the template parameters with the form data
    const templateParams = {
      from_name: formData.Name,
      message: formData.Message,
      from_mail: formData.email,
    };

    // Send the email using emailjs
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });


  };

  return (
    <div className={` flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 `}>
       <h1 className="font-poppins font-semibold ss:text-[32px] text-[32px] text-white mt-20">
          Let's work toghether ! <br className="sm:block hidden" />{" "}
        </h1>
      <div className=" md:flex lg:flex mt-20 px-20  ">
        <div className=" flex flex-col justify-center items-center bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mr-3 ">
          <form onSubmit={handleSubmit} >
            <div className="md:w-1/3 ">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 ">
                Full Name
              </label>
            </div>
            <div className=" md:flex lg:flex my-5 px-10 w-96">

              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                id="Name"
                name="Name"
                value={formData.Name}
                placeholder="Mike Wazowski"
                onChange={handleChange}
              />
            </div>
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Message
              </label>
            </div>
            <div className=" md:flex lg:flex my-5 px-10 ">

              <label htmlFor="lastName"></label>

              <textarea className=" h-48   bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"

                id="Message"
                name="Message"
                value={formData.Message}
                placeholder="How can we help you."
                onChange={handleChange}
              />

            </div>
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Your Email
              </label>
            </div>
            <div className=" md:flex lg:flex my-5 px-10  ">

              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="@"
                onChange={handleChange}

              />
            </div>

            <div className="flex flex-col justify-center my-10 px-10">

            {!isSubmitted ? (
              <button className="shadow bg-cyan-400 hover:bg-cyan-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Send Form
              </button>
            ) : (
              <p className=" shadow bg-cyan-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Thank you for your submission!</p>
            )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
