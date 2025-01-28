import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,
  imgClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image: any;
  imgClassName: string;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col ",
        className
      )}
    >
      <div className="absolute w-full h-full ">
        {image && (
          <img
            src={image}
            alt={image}
            className={cn(imgClassName, "z-0 object-cover w-full h-full")}
          />
        )}
      </div>

      <div className="absolute w-full h-full z-1 bg-black-100/50"></div>

      {header}
      <div className="relative group-hover/bento:translate-x-2 transition duration-200 z-50 p-4">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-md">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600  dark:text-neutral-300 text-sm">
          {description}
        </div>

        <button className="px-4 py-2 text-black backdrop-blur-sm rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200 my-2">
          Learn More
        </button>
      </div>
    </div>
  );
};
