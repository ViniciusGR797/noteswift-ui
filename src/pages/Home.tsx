import React, { useState } from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import DarkModeToggleButton from '../components/DarkModeToggleButton'; // Importe o componente
import { useDarkMode } from '../contexts/DarkModeContext';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../themes/themes';

const Home: React.FC = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const currentTheme = darkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <div>
                <BackgroundVideo />
                <DarkModeToggleButton isDarkModeButtonTopRight={true} />
                {/* Restante do conteúdo do aplicativo */}
            </div>
        </ThemeProvider>
    );
};

export default Home;
