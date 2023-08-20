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
import { Theme, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const HomePage: React.FC = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const currentTheme = darkMode ? darkTheme : lightTheme;



    // const position={{ bottom: '20%', left: '20%' }};

    // const screenPosition = position ? JSON.parse(JSON.stringify(position)) : {};


    // const font = smDown ? '1rem' : mdDown ? '2rem' : '2.2rem';
    // const fontButton = smDown ? '1rem' : mdDown ? '1.1rem' : '1.2rem';
    // screenPosition.bottom = smDown ? '25%' : position.bottom;
    // screenPosition.left = smDown ? '50%' : position.left;
    // screenPosition.transform = smDown ? 'translate(-50%, -50%)' : 'translate(0, 0)';
    // const screenWidth = smDown ? '35%' : width;

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <div>
                <BackgroundVideo />
                <DarkModeToggleButton isDarkModeButtonTopRight={true} />
                <Copyright />
                <LogoBox
                    size={{ sm: '80%', md: '60%', lg: '60%' }}
                    height={{ sm: '8%', md: '12%', lg: '20%' }}
                    position={{
                        top: { sm: '15%', md: '10%' },
                        left: { sm: '50%', md: '50%' },
                        transform: { sm: 'translateX(-50%)', md: 'translateX(-50%)' }
                    }}
                />
                <TextComponent
                    fontSize={{ sm: '1.2rem', md: '1.5rem', lg: '2rem' }}
                    color={currentTheme.palette.text.primary}
                    position={{
                        top: { sm: '40%', md: '45%' },
                        left: { sm: '50%', md: '50%' },
                        transform: { sm: 'translateX(-50%)', md: 'translateX(-50%)' }
                    }}
                    text="O poder das anotações ao seu alcance"
                />
                <Link to="/login">
                    <FilledButton
                        width={{ sm: '35%', md: '25%' }}
                        height='8%'
                        position={{
                            bottom: { sm: '25%', md: '20%' },
                            left: { sm: '50%', md: '20%' },
                            transform: { sm: 'translate(-50%, -50%)', md: 'translate(0, 0)' }
                        }}
                        fontSize={{ sm: '1rem', md: '1.1rem', lg: '1.2rem' }}
                        label="Login"
                    />
                </Link>
                <Link to="/register">
                    <OutlinedButton
                        width={{ sm: '35%', md: '25%' }}
                        height='8%'
                        position={{
                            bottom: { sm: '12%', md: '20%' },
                            left: { sm: '50%' },
                            right: { md: '20%' },
                            transform: { sm: 'translate(-50%, -50%)', md: 'translate(0, 0)' }
                        }}
                        fontSize={{ sm: '1rem', md: '1.1rem', lg: '1.2rem' }}
                        label="Cadastrar"
                    />
                </Link>
            </div>
        </ThemeProvider>
    );
};

export default HomePage;
