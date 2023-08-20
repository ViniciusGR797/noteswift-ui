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
import OutlineRectangle from '../components/OutlineRectangle';
import Profile from '../components/Profile';

const DashboardPage: React.FC = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const currentTheme = darkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <div>
                
                {/* <FilledRectangle width='20%' height='96%' backgroundColor={currentTheme.palette.background.paper} opacity={1} position={{ top: '2%', left: '11%', transform: 'translateX(-50%)' }} />
                <OutlineRectangle width='77%' height='81%' borderColor={currentTheme.palette.primary.main} position={{ top: '17%', left: '60.5%', transform: 'translateX(-50%)' }} />
                <Profile name='Vinicius' />


                <DarkModeToggleButton isDarkModeButtonTopRight={false} />
                
                <Link to="/">
                    <LogoBox size="30%" position={{ top: '5%', left: '37%', transform: 'translateX(-50%)' }} isShort={false} />
                </Link> */}



            </div>
        </ThemeProvider>
    );
};

export default DashboardPage;
