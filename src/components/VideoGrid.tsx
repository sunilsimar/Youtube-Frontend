import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "Shah Rukh Khan Eye Opening Speech(english)",
    image: "photo.jpg",
    thumbimage: "thumb.jpg",
    author: "Sunil Simar",
    views: "100k",
    timestamp: "1 days ago",
  },
  {
    title: "Shah Rukh Khan Eye Opening Speech(english)",
    image: "photo.jpg",
    thumbimage: "thumb.jpg",
    author: "Sunil Simar",
    views: "100k",
    timestamp: "1 days ago",
  },
  {
    title: "Shah Rukh Khan Eye Opening Speech(english)",
    image: "photo.jpg",
    thumbimage: "thumb.jpg",
    author: "Sunil Simar",
    views: "100k",
    timestamp: "1 days ago",
  },
  {
    title: "Shah Rukh Khan Eye Opening Speech(english)",
    image: "photo.jpg",
    thumbimage: "thumb.jpg",
    author: "Sunil Simar",
    views: "100k",
    timestamp: "1 days ago",
  },
  {
    title: "Shah Rukh Khan Eye Opening Speech(english)",
    image: "photo.jpg",
    thumbimage: "thumb.jpg",
    author: "Sunil Simar",
    views: "100k",
    timestamp: "1 days ago",
  },
  {
    title: "Shah Rukh Khan Eye Opening Speech(english)",
    image: "photo.jpg",
    thumbimage: "thumb.jpg",
    author: "Sunil Simar",
    views: "100k",
    timestamp: "1 days ago",
  },
  {
    title: "Shah Rukh Khan Eye Opening Speech(english)",
    image: "photo.jpg",
    thumbimage: "thumb.jpg",
    author: "Sunil Simar",
    views: "100k",
    timestamp: "1 days ago",
  },
  {
    title: "Shah Rukh Khan Eye Opening Speech(english)",
    image: "photo.jpg",
    thumbimage: "thumb.jpg",
    author: "Sunil Simar",
    views: "100k",
    timestamp: "1 days ago",
  },
  {
    title: "Shah Rukh Khan Eye Opening Speech(english)",
    image: "photo.jpg",
    thumbimage: "thumb.jpg",
    author: "Sunil Simar",
    views: "100k",
    timestamp: "1 days ago",
  },
  {
    title: "Shah Rukh Khan Eye Opening Speech(english)",
    image: "photo.jpg",
    thumbimage: "thumb.jpg",
    author: "Sunil Simar",
    views: "100k",
    timestamp: "1 days ago",
  },
  {
    title: "Shah Rukh Khan Eye Opening Speech(english)",
    image: "photo.jpg",
    thumbimage: "thumb.jpg",
    author: "Sunil Simar",
    views: "100k",
    timestamp: "1 days ago",
  },
  {
    title: "Shah Rukh Khan Eye Opening Speech(english)",
    image: "photo.jpg",
    thumbimage: "thumb.jpg",
    author: "Sunil Simar",
    views: "100k",
    timestamp: "1 days ago",
  },
  {
    title: "Shah Rukh Khan Eye Opening Speech(english)",
    image: "photo.jpg",
    thumbimage: "thumb.jpg",
    author: "Sunil Simar",
    views: "100k",
    timestamp: "1 days ago",
  },
  {
    title: "Shah Rukh Khan Eye Opening Speech(english)",
    image: "photo.jpg",
    thumbimage: "thumb.jpg",
    author: "Sunil Simar",
    views: "100k",
    timestamp: "1 days ago",
  },
  {
    title: "Shah Rukh Khan Eye Opening Speech(english)",
    image: "photo.jpg",
    thumbimage: "thumb.jpg",
    author: "Sunil Simar",
    views: "100k",
    timestamp: "1 days ago",
  },
];

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            thumbimage={video.thumbimage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
}
