import React, { useEffect, useState } from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import DarkModeToggleButton from '../components/DarkModeToggleButton'; // Importe o componente
import { useDarkMode } from '../contexts/DarkModeContext';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../themes/themes';
import { Button, Grid, Theme } from '@mui/material';
import Copyright from '../components/Copyright';
import LogoBox from '../components/LogoBox';
import TextComponent from '../components/TextComponent';
import FilledButton from '../components/FilledButton';
import OutlinedButton from '../components/OutlinedButton';
import Loading from '../components/Loading';

const LoginPage: React.FC = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const currentTheme = darkMode ? darkTheme : lightTheme;

    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const videoElement = document.getElementById('background-video') as HTMLVideoElement;

        const handleVideoLoaded = () => {
            setVideoLoaded(true);
        };

        videoElement.addEventListener('loadeddata', handleVideoLoaded);

        return () => {
            videoElement.removeEventListener('loadeddata', handleVideoLoaded);
        };
    }, []);

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <div>
                <BackgroundVideo id="background-video" />
                <DarkModeToggleButton isDarkModeButtonTopRight={true} />

                {videoLoaded ? (
                    // Render the rest of the components when the video is loaded
                    <>
                        <Copyright />
                    </>
                ) : (
                    <Loading /> // Render the Loading component while the video is loading
                )}
            </div>
        </ThemeProvider>
    );
};

export default LoginPage;
