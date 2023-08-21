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

                <FilledRectangle
                    width={{ sm: '12%', md: '20%', lg: '20%' }}
                    height='96%'
                    position={{
                        top: { sm: '2%', md: '2%' },
                        left: { sm: '7%', md: '11%' },
                        transform: { sm: 'translateX(-50%)', md: 'translateX(-50%)' }
                    }}
                    backgroundColor={currentTheme.palette.background.paper}
                    opacity={1}
                />

                <OutlineRectangle
                    width={{ sm: '84%', md: '77%', lg: '77%' }}
                    height='81%'
                    position={{
                        top: { sm: '17%', md: '17%' },
                        left: { sm: '57%', md: '60.5%' },
                        transform: { sm: 'translateX(-50%)', md: 'translateX(-50%)' }
                    }}
                    borderColor={currentTheme.palette.primary.main}
                />

                <Profile name='Vinicius' />

                <DarkModeToggleButton isDarkModeButtonTopRight={false} />

                <Link to="/">
                    <LogoBox
                        size={{ sm: '55%', md: '30%', lg: '30%' }}
                        height={{ sm: '8%', md: '6%', lg: '8%' }}
                        position={{
                            top: { sm: '6%', md: '5%' },
                            left: { sm: '50%', md: '37%' },
                            transform: { sm: 'translateX(-50%)', md: 'translateX(-50%)' }
                        }}
                    />
                </Link>


                {/*<Link to="/">
                    <LogoBox size="30%" position={{ top: '5%', left: '37%', transform: 'translateX(-50%)' }} isShort={false} />
                </Link> */}



            </div>
        </ThemeProvider>
    );
};

export default DashboardPage;
