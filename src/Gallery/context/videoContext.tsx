import React, { createContext, useState, useContext, ReactNode } from 'react';

import { addNewVideo, getVideos, deleteVideo } from '../../http/library';
// Define the type for a video
type Video = {
  id: number;
  name: string;
  url: string;
  createdAt: number;
  updatedAt?: number;
};

// Define the context types
interface VideoContextType {
  videos: Video[];
  fetchVideos: () => Promise<void>;
  addVideo: (name: string, url: string, createdAt: number) => void;
  deleteVideoById: (id: number) => Promise<void>; 
}

// Create a default context
const VideoContext = createContext<VideoContextType | undefined>(undefined);

// Provider Component Props
interface VideoProviderProps {
  children: ReactNode;
}

// Create the VideoProvider component to wrap the app
export const VideoProvider = ({ children }: VideoProviderProps) => {
  const [videos, setVideos] = useState<Video[]>([]);

  const fetchVideos = async () => {
    try {
        const res = await getVideos();
        setVideos(res.data);
    }catch(e) {
        //handle error here
    }
  };

  // Function to add a new video
  const addVideo = async (name: string, url: string, createdAt: number) => {
    try {
        await addNewVideo({name, url, createdAt});
        const newVideo = {
          id: videos.length + 1,
          name,
          url,
          createdAt
        };
        setVideos((prevVideos) => [...prevVideos, newVideo]);
    } catch(e) {
        //Handle error here
    }
  };

  const deleteVideoById = async (id: number) => {
    try {
      await deleteVideo(id);

      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
    } catch (error) {
      console.error('Failed to delete video', error);
    }
  };

  // Provide the state and functions to the rest of the app
  return (
    <VideoContext.Provider value={{ videos, fetchVideos, addVideo, deleteVideoById }}>
      {children}
    </VideoContext.Provider>
  );
};

// Custom hook to use the VideoContext
export const useVideoContext = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideoContext must be used within a VideoProvider');
  }
  return context;
};