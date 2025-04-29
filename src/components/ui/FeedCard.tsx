"use client";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface VideoProps {
  title: string;
  videoId: string;
  channelName: string;
  thumbnail: string;
  views: string;
  publishedAt: string;
  channelAvatar: string; // Add a separate avatar for the channel
}

const FeedCard: FC<VideoProps> = ({
  title,
  videoId,
  channelName,
  thumbnail,
  views,
  publishedAt,
  channelAvatar, // Destructure new avatar prop
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/watch?v=${videoId}`);
      }}
      className="transition-all ease-in-out duration-200 bg-black/0 overflow-hidden group hover:bg-black/10 p-3 rounded-xl"
    >
      {/* Thumbnail */}
      <div className="w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          width={640} // Reasonable width
          height={360} // 16:9 aspect ratio
          className="w-full rounded-xl aspect-video object-cover transition-all ease-in-out duration-200 group-hover:scale-[1.02]"
        />
      </div>

      {/* Video Info */}
      <div className="grid grid-cols-[40px_1fr]   overflow-hidden  mt-3 mx-1">
        <div className="grid grid-cols-[40px_1fr] ">
          <div className="h-8 w-8 mt-1.5 rounded-full overflow-hidden">
            <Image
              src={channelAvatar} // Use channel avatar here
              alt={title}
              width={32} // Avatar size
              height={32} // Avatar size
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg line-clamp-2 leading-[24px] ">
            {title}
          </h3>
          <p className="my-1 text-sm text-stone-700 font-medium line-clamp-2">
            {channelName}
          </p>

          <div className="my-1 text-sm text-stone-400">
            <span>{views} views</span> •{" "}
            <span>{moment(publishedAt).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
