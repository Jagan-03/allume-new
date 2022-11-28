import React from 'react'

interface BenefitCardProps 
{
    title: string;
    description: string;
    img: string;
}

const BenefitCard: React.FC<BenefitCardProps> = (props) => {
  return (
    <div className="benefitCard w-full flex flex-col font-sans">
        <div className="w-full md:p-3 p-1 flex items-center space-x-3">
            <img src={props.img} alt="" className="w-16"/>
            <h3 className="text-gray-200 font-bold md:text-2xl sm:text-xl text-lg">{props.title}</h3>
        </div>
        <div className="md:p-3 p-1">
            <p className="text-gray-300 md:text-lg sm:text-md text-sm">{props.description}</p>
        </div>
    </div>
  )
}

export default BenefitCard;
