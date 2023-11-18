"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { sendEmail } from '../actions'

const ContactForm = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isEmpty, setIsEmpty] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(true)
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.name.trim() || !form.message.trim()) {
      setIsEmpty(true)
      return
    }

    if (emailRegex.test(form.email)) {
      setIsValidEmail(true)
    } else {
      setIsValidEmail(false)
      return
    }

    const response = await sendEmail(form);

    if (response.message === 'Email sent successfully.') {
      alert('Email sent successfully.');
      setForm({
        name: '',
        email: '',
        message: '',
      });
      setIsEmpty(false);
      setIsValidEmail(true);
    } else {
      alert('Error sending email.');
    }

  }

  return (
    <section id='contact' className='relative w-full bg-neutral pt-[60px] xl:pt-[84px] flex flex-col xl:flex-row items-center xl:items-start xl:justify-between xl:px-[165px] pb-[87px] md:pb-[92px]'>
      <div className="flex flex-col gap-5 md:gap-9 mb-[50px] md:mb-12">
        <h2
          className="text-[2.5rem] md:text-[4.5rem] xl:text-[5.5rem] font-bold leading-10 md:leading-[4.5rem] tracking-[-1.136px] md:tracking-[-2.045px] text-center xl:text-start">
          Contact
        </h2>
        <p
          className="max-w-[343px] md:max-w-[445px] text-center xl:text-start text-secondary-text text-base md:text-[1.125rem] font-medium leading-[1.625rem] md:leading-7">
          I would love to hear about your project and how I could help. Please fill
          in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        id="contact"
        className="flex flex-col gap-8 w-[343px] md:w-[445px]">
        <div className="relative">
          <input
            value={form.name}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            placeholder="NAME"
            className={`${isEmpty && !form.name.trim() && "border-warning focus:border-warning"
              } px-6 pb-4 bg-transparent border-b focus:border-accent text-base font-medium leading-[1.625rem] tracking-[-0.222px] outline-none w-full`}
          />
          <div
            className={`${isEmpty && !form.name.trim() ? "block" : "hidden"
              } absolute right-0 top-0`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <circle cx="12" cy="12" r="11.5" stroke="#FF6F5B" />
              <rect x="11" y="6" width="2" height="9" rx="1" fill="#FF6F5B" />
              <rect x="11" y="17" width="2" height="2" rx="1" fill="#FF6F5B" />
            </svg>
          </div>

          <p
            className={`${(isEmpty && !form.name.trim()) ? "block" : "hidden"
              }  text-warning text-xs font-medium leading-4 tracking-[-0.167px] mt-[5px] text-end`}>
            This field is required
          </p>
        </div>
        <div className="relative">
          <input
            value={form.email}
            onChange={handleChange}
            type="text"
            name="email"
            id="email"
            placeholder="EMAIL"
            className={`${!isValidEmail && "border-warning focus:border-warning"} px-6 pb-4 bg-transparent border-b focus:border-accent text-base font-medium leading-[1.625rem] tracking-[-0.222px] outline-none w-full`} />
          <div
            className={`${!isValidEmail ? "block" : "hidden"} absolute right-0 top-0`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <circle cx="12" cy="12" r="11.5" stroke="#FF6F5B" />
              <rect x="11" y="6" width="2" height="9" rx="1" fill="#FF6F5B" />
              <rect x="11" y="17" width="2" height="2" rx="1" fill="#FF6F5B" />
            </svg>
          </div>
          <p
            className={`${!isValidEmail ? "block" : "hidden"}  text-warning text-xs font-medium leading-4 tracking-[-0.167px] mt-[5px] text-end`}>
            Sorry, invalid format here
          </p>
        </div>
        <div className="relative">
          <textarea
            value={form.message}
            onChange={handleChange}
            name="message"
            id="message"
            placeholder="MESSAGE"
            className={`${isEmpty && !form.message.trim() && "border-warning focus:border-warning"
              } px-6 resize-none bg-transparent border-b focus:border-accent text-base font-medium leading-[1.625rem] tracking-[-0.222px] outline-none w-full`}
            rows={5} />
          <div
            className={`${isEmpty && !form.message.trim() ? "block" : "hidden"
              } absolute right-0 top-0`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <circle cx="12" cy="12" r="11.5" stroke="#FF6F5B" />
              <rect x="11" y="6" width="2" height="9" rx="1" fill="#FF6F5B" />
              <rect x="11" y="17" width="2" height="2" rx="1" fill="#FF6F5B" />
            </svg>
          </div>
          <p
            className={`${isEmpty && !form.message.trim() ? "block" : "hidden"
              }  text-warning text-xs font-medium leading-4 tracking-[-0.167px] mt-[5px] text-end`}>
            This field is required
          </p>
        </div>

        <button
          className="border-b-2 border-accent hover:text-accent transition duration-[400] pb-[10px] uppercase text-base font-bold leading-[1.625rem] tracking-[2.286px] max-w-fit self-end"
          type="submit">Send Message</button>
      </form>

      <div
        className="absolute bottom-[95px] md:bottom-[20px] xl:bottom-[50px] left-[-350px] xl:left-[-210px]">
        <Image src="/images/pattern-rings.svg" alt="ring icon" width={530} height={129} />
      </div>
    </section>
  )
}

export default ContactForm