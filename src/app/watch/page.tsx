"use client";

import Layout from "@/helpers/Layout-feed";
import { useSearchParams } from "next/navigation";
import CustomDataFeed from "../../../customfeed";
import formatCount from "@/helpers/FormatYoutubeCounts";
import moment from "moment";
import WatchListCard from "@/components/ui/WatchListCard";
import Image from "next/image";

const Iframe = ({ videoData }: { videoData: string }) => {
  return (
    <iframe
      className="aspect-video rounded-xl shadow w-full"
      src={`https://www.youtube.com/embed/${videoData}`}
      title='Solo Brathuke So Better - Hey Idi Nenena (From "Solo Brathuke So Better")'
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default function Watch() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("v");

  // Find the video matching the ID
  const videoData = CustomDataFeed.find((video) => video.id === videoId);

  // Optional: handle case where video is not found
  if (!videoData) {
    return (
      <Layout>
        <div>
          <h1>Video not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="px-4  watch-layout ">
        <div className="w-full videoframe ">
          <Iframe videoData={videoData.id} />
          <div className="pb-4 w-full">
            <h1 className="my-2 font-bold md:text-lg">
              {videoData.snippet.title}
            </h1>
            <div className="flex  max-md:flex-col max-md:space-y-2 md:justify-between md:items-center">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-black">
                  <Image
                    src={videoData.channelData.snippet.thumbnails.high.url}
                    alt={videoData.channelData.snippet.thumbnails.high.url}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <h2 className="font-medium tracking-wide text-sm">
                    {videoData.snippet.channelTitle}
                  </h2>
                  <p className="text-xs text-black/50 my-1">
                    {formatCount(
                      Number(videoData.channelData.statistics.subscriberCount)
                    )}
                    <span> subscribers</span>
                  </p>
                </div>
                <button className="px-4 py-1.5 rounded-full text-sm mx-4 bg-black text-white font-normal ">
                  subscribe
                </button>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center h-[36px] bg-neutral-200/60 rounded-full overflow-hidden text-sm">
                  <button className="flex items-center gap-1 px-4 h-full hover:bg-black/10 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7.00042 20H8.00042H17.4304C18.5004 20 19.4104 19.33 19.6204 18.39L20.9604 12.39C21.2304 11.15 20.1804 10 18.7704 10H14.5404L16.0604 5.06C16.3804 4.03 15.5404 3 14.3804 3C13.8004 3 13.2404 3.24 12.8604 3.65L7.00042 10H3.00042V20H7.00042ZM13.6004 4.33C13.7904 4.12 14.0804 4 14.3804 4C14.6404 4 14.8804 4.11 15.0104 4.3C15.0804 4.4 15.1604 4.56 15.1004 4.77L13.5804 9.71L13.1804 11H14.5404H18.7704C19.1804 11 19.5704 11.17 19.8004 11.46C19.9204 11.61 20.0504 11.86 19.9804 12.18L18.6404 18.18C18.5404 18.65 18.0304 19 17.4304 19H8.00042V10.39L13.6004 4.33ZM4.00042 11H7.00042V19H4.00042V11Z" />
                    </svg>
                    <span className="font-medium ">
                      {formatCount(Number(videoData.statistics.likeCount))}
                    </span>
                  </button>

                  <span className="w-[1px] h-6 bg-gray-300" />

                  <button className="flex items-center justify-center px-4 h-full hover:bg-black/10 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
                    </svg>
                  </button>
                </div>
                <button className="h-[36px] flex items-center px-4 rounded-full gap-2 bg-neutral-200/60 hover:bg-black/10 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="size-5"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
                  </svg>
                  <span className="font-medium">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="playlist lg:h-full lg:max-h-[100vh] lg:overflow-y-scroll">
          <div className="w-full grid-cols-1 space-y-4 lg:max-w-[460px] pb-4 lg:pb-16">
            {/* Optional: Playlist header */}
            <div className="sticky top-0 z-10 bg-white py-2">
              <h2 className="text-lg font-semibold">Up next</h2>
            </div>

            {CustomDataFeed.map((video, index) => (
              <WatchListCard
                key={index}
                title={video.snippet.title}
                channelAvatar={video.channelData.snippet.thumbnails.high.url}
                channelName={video.snippet.channelTitle}
                thumbnail={video.snippet.thumbnails.high.url}
                views={formatCount(Number(video.statistics.viewCount))}
                publishedAt={moment(video.snippet.publishedAt).fromNow()}
                 
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
