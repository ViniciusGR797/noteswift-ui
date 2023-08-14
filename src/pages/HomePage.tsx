import React, { useEffect, useState } from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import DarkModeToggleButton from '../components/DarkModeToggleButton';
import { useDarkMode } from '../contexts/DarkModeContext';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../themes/themes';
import Loading from '../components/Loading';
import Copyright from '../components/Copyright';
import LogoBox from '../components/LogoBox';
import { Link } from 'react-router-dom';
import FilledButton from '../components/FilledButton';
import TextComponent from '../components/TextComponent';
import OutlinedButton from '../components/OutlinedButton';

const HomePage: React.FC = () => {
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
                        <LogoBox size='60%' position={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }} />
                        <TextComponent fontSize='2.2vw' color={currentTheme.palette.text.primary} position={{ top: '45%', left: '50%', transform: 'translateX(-50%)' }} text="O poder das anotações ao seu alcance" />
                        <Link to="/login">
                            <FilledButton width='25%' height='8%' position={{ bottom: '20%', left: '20%' }} label="Login" />
                        </Link>
                        <Link to="/register">
                            <OutlinedButton width='25%' height='8%' position={{ bottom: '20%', right: '20%' }} label="Cadastrar" />
                        </Link>
                    </>
                ) : (
                    <Loading /> // Render the Loading component while the video is loading
                )}
            </div>
        </ThemeProvider>
    );
};

export default HomePage;
