import Image from "next/image";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowWaveRightUp,
} from "@tabler/icons-react"; // Adjust the import paths accordingly
import Link from "next/link";

interface Item {
  title: string;
  description: string;
  header: JSX.Element;
  image: string;
  link: string;
  icon: JSX.Element;
}

interface CardProps {
  item: Item;
}

const Card = ({ item }: CardProps) => {
  return (
    <div className="max-w-xs w-full group">
      <div
        className="cursor-pointer overflow-hidden relative h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 "
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 opacity-10 group-hover:bg-black opacity-60"></div>

        {/* Header */}
        {item.header}

        <div className="absolute top-0 left-0 w-full h-full z-1 bg-black-100/50"></div>

        {/* Author Info */}
        <div className="relative group-hover/bento:translate-x-2 transition duration-200 z-50 p-4">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-md">
            {item.title}
          </div>
          <div className="font-sans font-normal text-neutral-600  dark:text-neutral-300 text-sm">
            {item.description}
          </div>
        </div>

        {/* Link */}
        <Link href={item.link}>
          <button className="px-4 py-2 text-black backdrop-blur-sm rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200 my-2">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
