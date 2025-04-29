const ids = [
  "AmGn686QCI0", "XD1cW3z5epg", "Pc_N1Sfw1IM", "QQwDeJFSVvc", "E7ww8Xowydc",
  "NtTGqvD67pE", "a-Xn3q3yst8", "sq7DJvhSNqQ", "TIOZUdc0aL8", "Th4uWCY-tQU",
  "bMdOY480QUk", "lWc1LVIuySA", "fGJA4Z_wqHw", "LVO_B6Z0WnM", "AmGn686QCI0",
  "Pc_N1Sfw1IM", "O5LW6HABcRA", "wui6D5J38MM", "q-6w3ntAl2w", "30l9SX5OTEM",
  "UuiabjRSDs4", "SK7yB7EtMkk", "pKguNINOFGM"
]

const apiKey = "your-api-key";

const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${ids.join(',')}&key=${apiKey}`;

async function youtubeDataFeed() {
  try {
    console.log("Fetching videos...");
    const res = await fetch(videoUrl);
    const data = await res.json();
    // console.log(data.items);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// ✨ New function for fetching channel data
async function youtubeDataFeedChannel(channelId) {
  const channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${channelId}&key=${apiKey}`;

  try {
    console.log(`Fetching channel data for ${channelId}...`);
    const res = await fetch(channelUrl);
    const data = await res.json();
    // console.log(data.items);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { youtubeDataFeed, youtubeDataFeedChannel };
