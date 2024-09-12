import { useEffect, useState } from "react";

import YouTube, { YouTubeProps } from "react-youtube";

import { useVideoContext } from "../context/videoContext";


interface Video {
  id: number;
  name: string;
  url: string;
  updatedAt?: number;
  createdAt: number;
}

const opts: YouTubeProps["opts"] = {
  height: "390",
  width: "400",
  // playerVars: {
  //   // https://developers.google.com/youtube/player_parameters
  //   autoplay: 1,
  // },
};

const LibVideoLayout = () => {
  const { videos, fetchVideos } = useVideoContext();

  const [videoList, setVideoList] = useState<Video[]>([]);

  useEffect(() => {
    const asyncGetVideos = async function () {
      try {
        await fetchVideos();
        setVideoList(videos);
      } catch (e) {}
    };
    asyncGetVideos();
  }, [videos]);

  return (
    <div
      style={{
        height: "80%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      <h3 style={{ color: "white", textAlign: "center" }}>Library</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gridAutoFlow: "row",
        }}
      >
        {videoList.map((v) => (
          <div key={v.id} style={{ textAlign: "center", margin: "1px" }}>
            <p>{v.name}</p>
            <YouTube videoId={v.url.split("=")[1]} opts={opts} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibVideoLayout;
