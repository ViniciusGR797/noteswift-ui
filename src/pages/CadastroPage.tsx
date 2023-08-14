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
import FilledRectangle from '../components/FilledRectangle';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import TextFieldIcon from '../components/TextFieldIcon';
import { Mail, Person, Lock } from '@mui/icons-material';
import Loading from '../components/Loading';

const CadastroPage: React.FC = () => {
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
                        <FilledRectangle width='40%' height='90%' backgroundColor={currentTheme.palette.secondary.main} opacity={0.85} position={{ top: '5%', left: '50%', transform: 'translateX(-50%)' }} />
                        <Link to="/">
                            <LogoBox size="7%" position={{ top: '8%', left: '50%', transform: 'translateX(-50%)' }} isShort={true} />
                        </Link>
                        <TextComponent fontSize='2.2vw' color={currentTheme.palette.text.secondary} position={{ top: '25%', left: '42%', transform: 'translateX(-50%)' }} text="Cadastro" fontWeight='bold' />
                        <TextFieldIcon label="Nome" icon={<Person />} position={{ top: '36%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                        <TextFieldIcon label="Email" icon={<Mail />} position={{ top: '48%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                        <TextFieldIcon label="Senha" icon={<Lock />} type='password' position={{ top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                        <Link to="/login">
                            <FilledButton width='25%' height='8%' position={{ top: '74%', left: '50%', transform: 'translate(-50%, -50%)' }} label="Criar" />
                        </Link>
                        <TextComponent fontSize='1.2vw' color={currentTheme.palette.text.secondary} position={{ top: '82%', left: '44%', transform: 'translateX(-50%)' }} text="Já possui uma conta?" />
                        <Link to="/login">
                            <TextComponent fontSize='1.2vw' color={currentTheme.palette.primary.main} position={{ top: '82%', left: '59%', transform: 'translateX(-50%)' }} text="Faça Login" fontWeight='bold' />
                        </Link>
                    </>
                ) : (
                    <Loading /> // Render the Loading component while the video is loading
                )}
            </div>
        </ThemeProvider>
    );
};

export default CadastroPage;
