import React, { useState, useEffect } from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme, lightTheme } from '../themes/themes';
import { Box } from '@mui/system';
import Loading from '../components/Loading';
import OutlinedButton from '../components/OutlinedButton';
import { Link } from 'react-router-dom';
import TextComponent from '../components/TextComponent';
import FilledButton from '../components/FilledButton';
import LogoBox from '../components/LogoBox';
import Copyright from '../components/Copyright';
import DarkModeToggleButton from '../components/DarkModeToggleButton';
import { useDarkMode } from '../contexts/DarkModeContext';

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
                    <LogoBox size='60%' position={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }} />
                    <TextComponent fontSize='2.2vw' color={currentTheme.palette.text.primary} position={{ top: '45%', left: '50%', transform: 'translateX(-50%)' }} text="O poder das anotações ao seu alcance" />
                    <Link to="/login">
                        <FilledButton width='25%' height='8%' position={{ bottom: '20%', left: '20%' }} label="Login" />
                    </Link>
                    <Link to="/register">
                        <OutlinedButton width='25%' height='8%' position={{ bottom: '20%', right: '20%' }} label="Cadastrar" />
                    </Link>
                </div>            
        </ThemeProvider>
    );
};

export default HomePage;
