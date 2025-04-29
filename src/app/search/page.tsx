//code for Search
"use client";
import formatCount from "@/helpers/FormatYoutubeCounts";
import Layout from "@/helpers/Layout-feed";
import CustomDataFeed from "../../../customfeed";
import RenderListCard from "@/components/ui/RenderListCard";
import moment from "moment";
// import { useSearchParams } from "next/navigation";

export default function Search() {
  // const SearchParams = useSearchParams();
  // const q = SearchParams.get("q");

  return (
    <Layout>
      <div className="h-full w-full px-2 md:px-4">
        <div className="h-full w-full grid-cols-1 space-y-3 max-w-[1000px] pb-3">
          {CustomDataFeed.map((video, index) => (
            <RenderListCard
              key={index}
              title={video.snippet.title}
              channelAvatar={video.channelData.snippet.thumbnails.high.url}
              channelName={video.snippet.channelTitle}
              thumbnail={video.snippet.thumbnails.high.url}
              views={formatCount(Number(video.statistics.viewCount))}
              description={video.snippet.tags.join(",")}
              publishedAt={moment(video.snippet.publishedAt).fromNow()}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
