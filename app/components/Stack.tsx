import React from 'react'

type StackProps = {
    name: string;
    year: number;
}

const Stack = ({ name, year }: StackProps) => {
    return (
        <div>
            <h1
                className="text-[2rem] md:text-5xl font-bold leading-10 md:leading-[3.5rem] tracking-[-1px] md:tracking-[-1.5px] text-center md:text-start md:mb-[14px]"
            >
                {name}
            </h1>
            <p
                className="text-secondary-text text-center md:text-start text-base md:text-[1.125rem] font-medium leading-[1.625rem] md:leading-7"
            >
                {year}
                {year > 1 ? " Years" : " Year"} Experience
            </p>
        </div>
    )
}

export default Stack