import React from 'react'
import Image from 'next/image'
import Iframe from 'react-iframe'

type ProjectProps = {
    imgSrc: string;
    imgAlt: string;
    name: string;
    stacks: string[];
    projectUrl: string;
    codeUrl: string;
}

const Project = ({ imgSrc, imgAlt, name, stacks, projectUrl, codeUrl }: ProjectProps) => {
    return (
        <div className="">
            <div
                className="overflow-hidden relative w-[345px] xl:w-[540px] h-[253px] xl:h-[400px] mb-5 group xl:cursor-pointer">
                <div
                    className="hidden absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-75 transition duration-500 xl:flex flex-col gap-12 items-center justify-center z-20">
                    <a
                        className="border-b-2 border-accent hover:text-accent transition duration-500 pb-[10px] uppercase text-base font-bold leading-[1.625rem] tracking-[2.286px] opacity-0 group-hover:opacity-100"
                        href={projectUrl}>View Project</a>
                    <a
                        className="border-b-2 border-accent hover:text-accent transition duration-500 pb-[10px] uppercase text-base font-bold leading-[1.625rem] tracking-[2.286px] opacity-0 group-hover:opacity-100"
                        href={codeUrl}>View Code</a>
                </div>

                {/* <Image src={imgSrc} alt={imgAlt} fill className="w-full h-full object-cover z-10" /> */}
                <Iframe url={projectUrl}
                    className="absolute w-full h-full object-cover z-10" />
            </div>

            <h2 className="text-2xl font-bold leading-8 mb-[7px] uppercase">
                {name}
            </h2>
            <div className="flex gap-[18px] items-center pb-5">
                {stacks.map((stack, index) => (
                    <p key={index} className="text-secondary-text text-lg font-medium leading-7 uppercase">
                        {stack}
                    </p>
                ))}
            </div>
            <div className="flex gap-8 xl:hidden">
                <a
                    className="border-b-2 border-accent hover:text-accent transition duration-[400] pb-[10px] uppercase text-base font-bold leading-[1.625rem] tracking-[2.286px]"
                    href={projectUrl}>View Project</a>
                <a
                    className="border-b-2 border-accent hover:text-accent transition duration-[400] pb-[10px] uppercase text-base font-bold leading-[1.625rem] tracking-[2.286px]"
                    href={codeUrl}>View Code</a>
            </div>
        </div>
    )
}

export default Project