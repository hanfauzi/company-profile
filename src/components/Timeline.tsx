import Image from "next/image";
import TimelineItemProps from "@/types/timeline";

export const TimelineItem = ({
  year,
  title,
  imageSrc,
  imageAlt = "Timeline image",
  description,
}: TimelineItemProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center px-4 md:px-10 py-6 border-b">
      <div className="md:col-span-1 flex md:justify-end">
        <div className="text-lg md:text-xl font-bold px-4 py-2 rounded bg-gray-100 text-center">
          {year}
        </div>
      </div>

      <div className="md:col-span-2 flex justify-center">
        <div className="border p-2 rounded-md w-full max-w-md">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={250}
            className="rounded-md w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="md:col-span-2 flex flex-col justify-center gap-2 text-center md:text-left">
        <p className="font-semibold text-black">{title}</p>
        <p className="text-sm text-black leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
