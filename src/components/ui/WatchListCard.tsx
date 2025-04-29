"use client";
import Image from "next/image";
import { FC } from "react";

interface VideoProps {
  title: string;
  channelName: string;
  thumbnail: string;
  description?: string;
  views: string;
  publishedAt: string;
  channelAvatar: string; // Add a separate avatar for the channel
}

const WatchListCard: FC<VideoProps> = ({
  title,
  channelName,
  thumbnail,
  views,
  publishedAt,
  channelAvatar,
}) => {
  return (
    <div className="overflow-hidden flex items-start gap-2 md group rounded-xl  w-full ">
      {/* Thumbnail */}
      <div
        className={`h-full w-full min-w-[200px]  max-w-[300px]  rounded md:rounded-lg aspect-video overflow-hidden shadow-md`}
      >
        <Image
          src={thumbnail}
          alt={title}
          width={500}
          height={360}
          className="w-full  aspect-video object-cover transition-all ease-in-out duration-200 group-hover:scale-[1.02]"
        />
      </div>
      {/* details */}
      <div className="grid grid-cols-1 place-content-start space-y-2 md:space-y-4 h-full">
        <div className="pr-3">
          <p className="line-clamp-2 font-medium  ">{title}</p>
          <p className="text-xs text-neutral-500 my-0.5">
            {views} &bull; {publishedAt}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={channelAvatar}
            alt={channelName}
            width={32}
            height={32}
            className="size-6 rounded-full "
          />
          <p className="text-xs  text-neutral-500 md:text-sm ">{channelName}</p>
        </div>
      </div>
    </div>
  );
};

export default WatchListCard;
