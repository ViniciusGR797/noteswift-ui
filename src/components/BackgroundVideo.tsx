import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import lightBackgroundVideo from '../assets/LightBackground.mp4';
import darkBackgroundVideo from '../assets/DarkBackground.mp4';
import Loading from './Loading';

interface BackgroundVideoProps {
  id: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ id }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById(id) as HTMLVideoElement;

    const handleVideoLoaded = () => {
      setVideoLoaded(true);
    };

    videoElement.addEventListener('loadeddata', handleVideoLoaded);

    return () => {
      videoElement.removeEventListener('loadeddata', handleVideoLoaded);
    };
  }, [id]);

  const currentTheme = useTheme();
  const videoSource = currentTheme.palette.mode === 'dark' ? darkBackgroundVideo : lightBackgroundVideo;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -1 }}>
      <video
        key={videoSource} // Use key to force re-render when videoSource changes
        id={id}
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={videoSource} type="video/mp4" />
      </video>
      {!videoLoaded && <Loading />}
    </div>
  );
};

export default BackgroundVideo;
