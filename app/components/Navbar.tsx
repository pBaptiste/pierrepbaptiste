import React from 'react'
import Image from 'next/image'
import { SiFrontendmentor } from 'react-icons/si'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const socialLinks = [
    { label: 'Frontend Mentor', href: 'https://www.frontendmentor.io/profile/pBaptiste', icon: <SiFrontendmentor /> },
    { label: 'Github', href: 'https://github.com/pBaptiste?tab=repositories', icon: <BsGithub /> },
    { label: 'Linkedin', href: 'https://www.linkedin.com/in/pierre-baptiste-4374a3238/', icon: <BsLinkedin /> },
]

const Navbar = () => {

    return (
        <header className='w-[343px] md:w-[706px] xl:w-[1110px] relative flex flex-col md:flex-row md:justify-between items-center gap-5 pt-5 md:pt-[29px] pb-10'>
            <p className="font-bold text-2xl md:text-[2rem] leading-8 tracking-[-0.333px] md:tracking-[-0.444px]">
                pierrepbaptiste
            </p>

            <nav>
                <ul className='flex gap-[25.6px] items-center'>
                    {socialLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                aria-label={link.label}
                                href={link.href}
                                className='hover:text-accent transition duration-[400] text-xl'
                            >
                                {link.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar