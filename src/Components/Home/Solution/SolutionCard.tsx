import { FC } from "react";
import { Icon } from '@iconify/react';
import ActionButton from "@/Components/SharedComponents/ActionButton";

interface Solution {
  title: string;
  icon: string;
  description: string;
  link: string; 
}

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard: FC<SolutionCardProps> = ({ solution }) => {
  return (
    <div className='solution-item w-full bg-white shadow-xl p-5 space-y-6 rounded-xl border group hover:bg-prim transition-all duration-500 h-[400px] flex flex-col justify-between'>
      <h4 className='group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18'>
        {solution.title}
      </h4>

      <div className='solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-gradient transition-transform duration-500 group-hover:rotate-y-360'>
        <Icon icon={solution.icon} width="32" height="32" className='group-hover:text-white transition-colors duration-300' />
      </div>
      
      <p className='text-pera-dark font-normal group-hover:text-white transition-colors duration-500'>
        {solution.description}
      </p>
      <ActionButton href={solution.link} text="Learn More" variant="light" />
    </div>
  );
};

export default SolutionCard;