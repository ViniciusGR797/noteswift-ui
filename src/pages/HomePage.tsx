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
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const currentTheme = darkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <div>
                <BackgroundVideo />
                <DarkModeToggleButton isDarkModeButtonTopRight={true} />
                <Copyright />
                <LogoBox size="60%" position={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }} />
                <TextComponent fontSize="2.2vw" position={{ top: '45%', left: '50%', transform: 'translateX(-50%)' }} text="O poder das anotações ao seu alcance" />
                <Link to="/login">
                    <FilledButton position={{ bottom: '20%', left: '20%' }} label="Login" />
                </Link>

                <Link to="/register">
                    <OutlinedButton position={{ bottom: '20%', right: '20%' }} label="Cadastrar" />
                </Link>

                {/* Restante do conteúdo do aplicativo */}
            </div>
        </ThemeProvider>
    );
};

export default HomePage;
