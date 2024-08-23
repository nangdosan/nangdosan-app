import { GoArrowUpRight } from "react-icons/go";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { IoLogoGithub } from "react-icons/io";
import Image from "next/image";

export default function Skill({ urlImage, title, desc, ...props }: any) {
  return (
    <div className="w-full md:w-3/12 flex flex-col">
      <Image src={urlImage} alt={title} width={400} height={400} />
      <div className="ml-3">
        <h3 className="text-lg mb-1 md:mb-3">{title}</h3>
        <p className="text-sm text-white/80 text-justify">{desc}</p>
      </div>
      {props.demoUrl && (
        <div className="mt-3 md:mt-5 flex items-center -space-x-5">
          <ButtonPrimary
            href={props.demoUrl}
            className="scale-75 hover:scale-90"
          >
            <GoArrowUpRight className="mr-2" />
            Demo
          </ButtonPrimary>
          <ButtonSecondary
            href={props.codeUrl}
            className="scale-75 hover:scale-90 transition-all duration-200"
          >
            <IoLogoGithub className="mr-2 inline" />
            Code
          </ButtonSecondary>
        </div>
      )}
    </div>
  );
}
