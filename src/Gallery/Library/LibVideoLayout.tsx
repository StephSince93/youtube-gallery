import YouTube, { YouTubeProps } from "react-youtube";

interface Video {
  id: number;
  name: string;
  url: string;
  updatedAt: number;
  createdAt: number;
}

const VIDEO_ARR: Video[] = [
  {
    id: 1,
    name: "Sample Vid",
    url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    updatedAt: 32483294832984,
    createdAt: 234823947328,
  },
  {
    id: 2,
    name: "Sample Vid 2",
    url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    updatedAt: 32483294832984,
    createdAt: 234823947328,
  },
  {
    id: 3,
    name: "Sample Vid 3",
    url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    updatedAt: 32483294832984,
    createdAt: 234823947328,
  },
  {
    id: 4,
    name: "Sample Vid 4",
    url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    updatedAt: 32483294832984,
    createdAt: 234823947328,
  },
  {
    id: 5,
    name: "Sample Vid 5",
    url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    updatedAt: 32483294832984,
    createdAt: 234823947328,
  },
];

const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '400',
    // playerVars: {
    //   // https://developers.google.com/youtube/player_parameters
    //   autoplay: 1,
    // },
  };

const LibVideoLayout = () => (
  <div
    style={{
      height: "80%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      overflow: 'auto'
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
      {VIDEO_ARR.map((v) => (
        <div key={v.id} style={{ textAlign: "center", margin: '1px' }}>
          <p>{v.name}</p>
          <YouTube videoId={v.url.split("=")[1]} opts={opts}/>
        </div>
      ))}
    </div>
  </div>
);

export default LibVideoLayout;
