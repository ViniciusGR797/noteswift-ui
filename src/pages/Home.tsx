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

const Home: React.FC = () => {
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
                <TextComponent fontSize="2rem" position={{ top: '40%', left: '50%', transform: 'translateX(-50%)' }} text="O poder das anotações ao seu alcance" />
                <FilledButton position={{ top: '60%', left: '50%', transform: 'translateX(-50%)' }} label="Login" />
                <OutlinedButton position={{ top: '80%', left: '50%', transform: 'translateX(-50%)' }} label="Cadastrar" />


                {/* Usar o Grid para alinhar os botões */}
                <Grid container spacing={2} justifyContent="center" style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Grid item>
                        <FilledButton label="Login" />
                    </Grid>
                    <Grid item>
                        <OutlinedButton label="Cadastrar" />
                    </Grid>
                </Grid>

                <div>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Botão 1
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary">
                                Botão 2
                            </Button>
                        </Grid>
                    </Grid>
                </div>

                {/* Restante do conteúdo do aplicativo */}
            </div>
        </ThemeProvider>
    );
};

export default Home;
function setTheme(currentTheme: Theme) {
    throw new Error('Function not implemented.');
}

