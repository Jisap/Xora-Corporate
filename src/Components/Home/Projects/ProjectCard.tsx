import { FC } from "react";
import Image from "next/image";
import ActionButton from "@/Components/SharedComponents/ActionButton";

interface Project {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="projects-item flex flex-col sm:flex-row justify-center items-center w-full bg-white shadow-2xl p-5 rounded-xl gap-5 h-auto lg:h-[550px]">
      <div className="project-image w-full sm:w-[50%] h-full">
        <Image src={project.image} alt="project-image" width={350} height={350} className="w-full h-full object-cover rounded-xl" />
      </div>
      
      <div className="project-content w-full sm:w-[50%]">
        <span className="bg-white border border-prim rounded-sm px-2 text-prim font-chakrapetch font-medium">
          {project.category}
        </span>

        <h4 className="font-unbounded text-16 lg:text-24 pt-2 pb-4">
          {project.title}
        </h4>

        <p className="text-prim-dark font-normal text-14 pb-5">
          {project.description}
        </p>
        <ActionButton href={project.link} text="Learn More" variant="light" />
      </div>
    </div>
  );
};

export default ProjectCard;