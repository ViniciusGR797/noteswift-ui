import React, { useEffect, useState } from 'react';
import lightBackgroundVideo from '../assets/LightBackground.mp4';
import darkBackgroundVideo from '../assets/DarkBackground.mp4';
import { useTheme } from '@mui/material/styles';
import { useDarkMode } from '../contexts/DarkModeContext';

const BackgroundVideo: React.FC = () => {
  const { darkMode } = useDarkMode();
  const currentTheme = useTheme();
  const [videoKey, setVideoKey] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [nextVideoSource, setNextVideoSource] = useState<string | null>(null);

  const handleThemeChange = () => {
    setOpacity(0); // Inicia a transição com opacidade 0

    // Aguarda um pouco antes de atualizar o vídeo
    setTimeout(() => {
      setNextVideoSource(currentTheme.palette.mode === 'dark' ? darkBackgroundVideo : lightBackgroundVideo);
      setVideoKey(prevKey => prevKey + 1);
    }, 150); // Tempo de espera para iniciar a transição

    // Após a metade do tempo de transição, aumenta a opacidade para 1 (efeito de fade-in)
    setTimeout(() => {
      setOpacity(1);
    }, 150 + 150); // Tempo de espera + metade do tempo de transição
  };

  useEffect(() => {
    handleThemeChange();
  }, [darkMode]);

  const currentVideoSource = currentTheme.palette.mode === 'dark' ? darkBackgroundVideo : lightBackgroundVideo;

  const transitionStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: -1,
  };

  return (
    <div style={transitionStyle}>
      {nextVideoSource && (
        <video
          key={videoKey}
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: opacity,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <source src={nextVideoSource} type="video/mp4" />
        </video>
      )}

      <video
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 1 - opacity, // Opacidade inversa para o vídeo anterior
        }}
      >
        <source src={currentVideoSource} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
