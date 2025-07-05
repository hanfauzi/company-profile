import Image from "next/image";
import { Button } from "@/components/ui/button";
import TimelineItemProps from "@/types/timeline";

export const TimelineItem = ({
  year,
  title,
  imageSrc,
  imageAlt = "Timeline image",
  description,
}: TimelineItemProps) => {
  return (
    <div className="grid grid-cols-5 gap-4 items-center px-10 py-6">
      {/* Year */}
      <div className="col-span-1 flex justify-end">
        <div className="text-xl font-bold px-4 py-2 rounded">{year}</div>
      </div>

      {/* Image */}
      <div className="col-span-2 flex justify-center">
        <div className="border p-2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={250}
            className="rounded-md w-full max-w-[400px] h-auto"
          />
        </div>
      </div>

      {/* Description & Button */}
      <div className="col-span-2 flex flex-col justify-center gap-4">
        <p className="text-black leading-relaxed">{title}</p>
        <p className="text-black leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
