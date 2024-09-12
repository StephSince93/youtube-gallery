// import './App.css';
import Gallery from "./Gallery/Gallery";
import { VideoProvider } from "./Gallery/context/videoContext";
function App() {
  return (
    <VideoProvider>
      <Gallery />
    </VideoProvider>
  );
}

export default App;
