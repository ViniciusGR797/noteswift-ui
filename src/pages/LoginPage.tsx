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
import FilledRectangle from '../components/FilledRectangle';
import { Link } from 'react-router-dom';
import TextFieldIcon from '../components/TextFieldIcon';
import { Person, Mail, Lock } from '@mui/icons-material';

const LoginPage: React.FC = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const currentTheme = darkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <div>
                {/* <BackgroundVideo />
                <DarkModeToggleButton isDarkModeButtonTopRight={true} />
                <Copyright />

                <FilledRectangle width='40%' height='90%' backgroundColor={currentTheme.palette.secondary.main} opacity={0.85} position={{ top: '5%', left: '50%', transform: 'translateX(-50%)' }} />
                <Link to="/">
                    <LogoBox size="7%" position={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }} isShort={true} />
                </Link>
                <TextComponent fontSize='2.2vw' color={currentTheme.palette.text.secondary} position={{ top: '30%', left: '41%', transform: 'translateX(-50%)' }} text="Login" fontWeight='bold' />
                <TextFieldIcon label="Email" icon={<Mail />} position={{ top: '43%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                <TextFieldIcon label="Senha" icon={<Lock />} type='password' position={{ top: '56%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                <Link to="/dashboard">
                    <FilledButton width='25%' height='8%' position={{ top: '72%', left: '50%', transform: 'translate(-50%, -50%)' }} label="Entrar" />
                </Link>
                <TextComponent fontSize='1.2vw' color={currentTheme.palette.text.secondary} position={{ top: '82%', left: '42%', transform: 'translateX(-50%)' }} text="Novo por aqui?" />
                <Link to="/register">
                    <TextComponent fontSize='1.2vw' color={currentTheme.palette.primary.main} position={{ top: '82%', left: '58%', transform: 'translateX(-50%)' }} text="Crie uma conta" fontWeight='bold' />
                </Link> */}
            </div>
        </ThemeProvider>
    );
};

export default LoginPage;
