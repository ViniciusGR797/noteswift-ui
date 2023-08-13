import React, { useEffect, useState } from 'react';
import lightBackgroundVideo from '../assets/LightBackground.mp4';
import darkBackgroundVideo from '../assets/DarkBackground.mp4';
import { useTheme } from '@mui/material/styles';
import { useDarkMode } from '../contexts/DarkModeContext';

const BackgroundVideo: React.FC = () => {
    const currentMode = useTheme().palette.mode;





    const videoSource = currentMode === 'dark' ? darkBackgroundVideo : lightBackgroundVideo;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -1 }}>
            <video
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
