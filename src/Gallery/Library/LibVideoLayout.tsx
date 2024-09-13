import { useEffect, useState } from "react";

import YouTube, { YouTubeProps } from "react-youtube";

import { useVideoContext } from "../context/videoContext";



const opts: YouTubeProps["opts"] = {
  height: "390",
  width: "400",
};

const LibVideoLayout = () => {
  const { videos, fetchVideos, deleteVideoById } = useVideoContext();

  useEffect(() => {
    const asyncGetVideos = async function () {
      try {
        await fetchVideos();
      } catch (e) {}
    };
    asyncGetVideos();
  }, []);

  const deleteVideo = async (id:number) => {
    try {
        await deleteVideoById(id);
    }catch(e) {
        console.log('There was an issue deleting video');
    }
  }

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
        {videos.map((v, i) => (
          <div key={i} style={{ textAlign: "center", margin: "1px" }}>
            <p style={{color: 'white'}}>{v.name}</p>
            <YouTube videoId={v.url.split("=")[1]} opts={opts} />
            <button onClick={() => deleteVideo(v.id)}>Delete Video</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibVideoLayout;
