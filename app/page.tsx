import Image from 'next/image'
import Stack from './components/Stack'
import Project from './components/Project';
import ContactForm from './components/ContactForm';
import { projects } from '@/projects';
import { SiFrontendmentor } from 'react-icons/si'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import EmailButton from './components/EmailButton';

let techStack = [
  { name: "HTML", years: 2 },
  { name: "CSS", years: 2 },
  { name: "Javascript", years: 2 },
  { name: "Accessibility", years: 2 },
  { name: "React", years: 1 },
  { name: "Tailwind CSS", years: 1 },
];

const socialLinks = [
  { label: 'Frontend Mentor', href: 'https://www.frontendmentor.io/profile/pBaptiste', icon: <SiFrontendmentor /> },
  { label: 'Github', href: 'https://github.com/pBaptiste?tab=repositories', icon: <BsGithub /> },
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/pierre-baptiste-4374a3238/', icon: <BsLinkedin /> },
]

export default function Home() {
  return (
    <main className='overflow-x-clip'>
      <div
        className="absolute top-[130px] md:top-[95px] xl:top-[125px] left-[-345px] md:left-[-270px] z-[-20]">
        <Image src="/images/pattern-rings.svg" alt="ring icon" width={530} height={129} />
      </div>
      <div className='flex flex-col items-center'>
        <div className='w-[343px] md:w-[706px] xl:w-[1110px]'>

          {/* CALL TO ACTION */}
          <section
            className="relative flex flex-col items-center md:items-start">
            <h1
              className="text-center md:text-start text-[2.5rem] md:text-[4.5rem] xl:text-[5.5rem] font-bold leading-10 md:leading-[4.5rem] xl:leading-[5.5rem] tracking-[-1.136px] md:tracking-[-2.045px] xl:tracking-[-2.5px] max-w-[343px] md:max-w-[445px] xl:max-w-[709px] mb-6 md:mb-[60px] xl:mb-[37px]">
              Nice to meet you! I’m <span className="border-b-4 h-1 border-accent"
              >Pierre.</span>
            </h1>
            <p
              className="text-center md:text-start text-secondary-text text-base md:text-[1.125rem] font-medium leading-[1.625rem] md:leading-7 max-w-[343px] md:max-w-[445px] mb-6 md:mb-[34px] xl:mb-[66px]">
              I am a U.S.-based front-end developer with a passion for creating web applications that prioritize accessibility and enhances user experience.
            </p>
            <div className='flex gap-4 uppercase text-sm font-bold leading-[1.625rem] tracking-[2.286px]'>
              <EmailButton />
              or
              <a
                href="#contact"
                className="border-b-2 border-accent hover:text-accent transition duration-[400] pb-[10px] uppercase text-base font-bold leading-[1.625rem] tracking-[2.286px]"
              >contact me
              </a>
            </div>

            <div className='hidden -z-10 md:block absolute w-[200px] h-[400px] xl:w-[300px] xl:h-[466px] right-0 top-[-100px]'>
              <Image src='/images/web-developer.svg' alt='Web Developer Icon' fill className='object-contain' />
            </div>
          </section>

          {/* TECH STACK */}
          <section
            className="relative my-20 md:mt-[60px] md:mb-[100px] flex flex-col items-center">
            <div className="w-full border-t mb-10 xl:mb-[72px]" />

            <div
              className="grid gap-6 xl:gap-y-[58px] md:grid-cols-2 xl:grid-cols-3 md:w-full">
              {techStack.map((stack, index) => (
                <Stack key={index} name={stack.name} year={stack.years} />
              ))}
            </div>

            <div className="absolute bottom-[-65px] right-[-360px] ">
              <Image src="/images/pattern-rings.svg" alt="ring icon" width={530} height={129} />
            </div>

            <div className="w-full border-t mt-10 md:hidden" />
          </section>

          {/* PROJECTS */}
          <section
            className="flex flex-col items-center md:items-start mb-20 xl:mb-[139px]">
            <div className="md:w-full">
              <div className="flex justify-between items-center pb-10 md:pb-[60px]">
                <h1
                  className="text-[2.5rem] md:text-[4.5rem] font-bold leading-10 md:leading-[4.5rem] tracking-[-1.136px] md:tracking-[-2.045px]">
                  Projects
                </h1>
                <a
                  href="#contact"
                  className="border-b-2 border-accent hover:text-accent transition duration-[400] pb-[10px] uppercase text-base font-bold leading-[1.625rem] tracking-[2.286px]"
                >contact me</a>
              </div>
              <div
                className="flex flex-col gap-2 md:flex-row gap-y-10 md:justify-between md:flex-wrap">
                {projects.map((project, index) => (
                  <Project key={index}
                    imgSrc={project.imgSrc}
                    imgAlt={project.imgAlt}
                    name={project.name}
                    stacks={project.stacks}
                    projectUrl={project.projectUrl}
                    codeUrl={project.codeUrl} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <ContactForm />

      <section
        className="bg-neutral px-4 md:px-8 xl:px-[165px] pb-[60px] md:pb-10 xl:pb-[92px] flex flex-col items-center md:items-start">
        <div className="border-t w-[343px] md:w-full mb-10 md:mb-[30px]" />

        <div
          className="flex flex-col md:flex-row md:justify-between gap-5 items-center md:w-full">
          <p
            className="font-bold text-2xl md:text-[2rem] leading-8 tracking-[-0.333px] md:tracking-[-0.444px]">
            pierrepbaptiste
          </p>
          <nav>
            <ul className="flex gap-[25.6px] items-center">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    aria-label={link.label}
                    href={link.href}
                    className='hover:text-accent transition duration-[400] text-xl'>
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

    </main>
  )
}
