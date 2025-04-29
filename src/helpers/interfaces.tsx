export default interface DataFeed {
    kind: string;
    etag: string;
    id: string;
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: {
          url: string;
          width: string;
          height: string;
        };
        medium: {
          url: string;
          width: string;
          height: string;
        };
        high: {
          url: string;
          width: string;
          height: string;
        };
        standard: {
          url: string;
          width: string;
          height: string;
        };
        maxres: {
          url: string;
          width: string;
          height: string;
        };
      };
      channelTitle: string;
      tags: string[];
      categoryId: string;
      liveBroadcastContent: string;
      localized: {
        title: string;
        description: string;
      };
    };
    statistics: {
      viewCount: string;
      likeCount: string;
      favoriteCount: string;
      commentCount: string;
    };
    channelInfo: {
      title: string;
      description: string;
      imageUrl: string;
      contentDetails: {
        relatedPlaylists: {
          likes: string;
          uploads: string;
        };
      };
    };
  }
  