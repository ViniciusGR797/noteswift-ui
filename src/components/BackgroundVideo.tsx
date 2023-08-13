import { useTheme } from '@mui/material/styles';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useEffect, useState } from 'react';
import lightBackgroundVideo from '../assets/LightBackground.mp4';
import darkBackgroundVideo from '../assets/DarkBackground.mp4';

const BackgroundVideo: React.FC = () => {
  const { darkMode } = useDarkMode();
  const currentTheme = useTheme();
  const [videoKey, setVideoKey] = useState(0); // Chave para forçar a recarga do vídeo

  const handleThemeChange = () => {
    setVideoKey(prevKey => prevKey + 1); // Atualiza a chave para recarregar o vídeo
  };

  useEffect(() => {
    handleThemeChange(); // Recarrega o vídeo quando o tema muda
  }, [darkMode]);

  const videoSource = currentTheme.palette.mode === 'dark' ? darkBackgroundVideo : lightBackgroundVideo;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -1 }}>
      <video
        key={videoKey} // Chave para forçar a recarga do vídeo
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
    </div>
  );
};

export default BackgroundVideo;