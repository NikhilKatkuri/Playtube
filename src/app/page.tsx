"use client";

import FeedCard from "@/components/ui/FeedCard";
import { useAppContext } from "@/context/AppContext";
import Layout from "@/helpers/Layout-feed";
import { useState } from "react";
import CustomDataFeed from "../../customfeed.js";
import formatCount from "../helpers/FormatYoutubeCounts";
export default function Home() {
  const { navbarShortCuts,Menu } = useAppContext();
  const [selectedId, setSelectedId] = useState(0); // <-- Manage active button state

  return (
    <Layout>
      {/* Top Nav for shortcuts */}
      <div className="w-full overflow-x-auto whitespace-nowrap no-scrollbar sticky top-[56px] bg-white/90 backdrop-blur-3xl z-20">
        <nav className={`flex items-center gap-3 min-h-10 h-16 pl-2 min-w-max ${!Menu && "md:ml-4"}`}>
          {navbarShortCuts.map((t, i) => (
            <button
              key={i}
              onClick={() => setSelectedId(i)} // <-- Update selected button
              className={`px-3 h-8 rounded-md transition-all duration-200 ${
                selectedId === i
                  ? "bg-black text-white"
                  : "bg-stone-100 hover:bg-stone-200"
              }`}
            >
              <p className="font-semibold text-sm">{t.name}</p>
            </button>
          ))}
        </nav>
      </div>

      {/* Grid for content */}
      <div className={`h-full w-full grid grid-cols-1 min-[520px]:grid-cols-2 min-[1000px]:grid-cols-3 scroll-smooth ${   !Menu&& "md:px-4"}`}>
        {/* 👇 Add your cards here later */}
        {CustomDataFeed.map((video, index) => (
          <FeedCard
            key={index}
            videoId={video.id}
            title={video.snippet.title}
            channelAvatar={video.channelData.snippet.thumbnails.high.url}
            channelName={video.snippet.channelTitle}
            thumbnail={video.snippet.thumbnails.high.url}
            views={formatCount(Number(video.statistics.viewCount))}
            publishedAt={video.snippet.publishedAt}
          />
        ))}
      </div>
    </Layout>
  );
}
