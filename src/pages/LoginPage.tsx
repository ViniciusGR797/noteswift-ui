import React, { useEffect, useState } from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import DarkModeToggleButton from '../components/DarkModeToggleButton'; // Importe o componente
import { useDarkMode } from '../contexts/DarkModeContext';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../themes/themes';
import { Box, Button, Grid, Theme } from '@mui/material';
import Copyright from '../components/Copyright';
import LogoBox from '../components/LogoBox';
import TextComponent from '../components/TextComponent';
import FilledButton from '../components/FilledButton';
import OutlinedButton from '../components/OutlinedButton';
import Loading from '../components/Loading';
import FilledRectangle from '../components/FilledRectangle';
import { Link } from 'react-router-dom';
import TextFieldIcon from '../components/TextFieldIcon';
import { Person, Mail, Lock, AddBox } from '@mui/icons-material';
import BoxComponent from '../components/BoxComponent';

const LoginPage: React.FC = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const currentTheme = darkMode ? darkTheme : lightTheme;



    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        const newErrors = {
            email: '',
            password: '',
        };

        if (!inputValues.email) {
            newErrors.email = 'O campo obrigatório';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputValues.email)) {
            newErrors.email = 'Email inválido';
        }

        if (!inputValues.password) {
            newErrors.password = 'O campo obrigatório';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(inputValues.password)) {
            newErrors.password = 'Senha deve conter 8+ caracteres com letras maiúsculas, minúsculas, números e caracteres especiais';
        }

        setErrors(newErrors);

        if (!newErrors.email && !newErrors.password) {
            // Execute a ação de envio aqui
        }
    };



    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <div>
                <BackgroundVideo />
                <DarkModeToggleButton isDarkModeButtonTopRight={true} />
                <Copyright />

                <FilledRectangle
                    width={{ sm: '80%', md: '60%', lg: '40%' }}
                    height='90%'
                    position={{
                        top: { sm: '5%', md: '5%' },
                        left: { sm: '50%', md: '50%' },
                        transform: { sm: 'translateX(-50%)', md: 'translateX(-50%)' }
                    }}
                    backgroundColor={currentTheme.palette.secondary.main}
                    opacity={0.85}
                />

                <BoxComponent
                    width={{ sm: '50%', md: '35%', lg: '25%' }}
                    height={{ sm: '75%', md: '75%', lg: '75%' }}
                    position={{
                        top: { sm: '50%', md: '50%' },
                        left: { sm: '50%', md: '50%' },
                        transform: { sm: 'translate(-50%, -50%)', md: 'translate(-50%, -50%)' }
                    }}
                    isCenter={true}
                >
                    <Grid container>
                        <Link to="/">
                            <LogoBox
                                size={{ sm: '39%', md: '32%', lg: '30%' }}
                                height={{ sm: '8%', md: '12%', lg: '15%' }}
                                position={{
                                    top: { sm: '2%', md: '2%' },
                                    left: { sm: '50%', md: '50%' },
                                    transform: { sm: 'translateX(-50%)', md: 'translateX(-50%)' }
                                }}
                                isShort={true}
                            />
                        </Link>

                        <Grid item xs={4}>
                            <TextComponent
                                fontSize={{ sm: '1.2rem', md: '1.5rem', lg: '1.6rem' }}
                                width={{ sm: '33%', md: '33%', lg: '33%' }}
                                color={currentTheme.palette.text.secondary}
                                position={{
                                    top: { sm: '23%', md: '23.5%' }
                                }}
                                text="Login"
                                fontWeight='bold'
                                textAlign='left'
                            />
                        </Grid>
                        <Grid item xs={8}></Grid>

                        <TextFieldIcon
                            name='email'
                            label="Email"
                            icon={<Mail />}
                            position={{
                                top: { sm: '40%', md: '40%' },
                                left: { sm: '50%', md: '50%' },
                                transform: { sm: 'translate(-50%, -50%)', md: 'translate(-50%, -50%)' }
                            }}
                            fontSize={{ sm: '0.86rem', md: '0.86rem', lg: '1rem' }}
                            width={{ sm: '100%', md: '100%', lg: '100%' }}
                            height='11%'
                            onChange={handleChange}
                            helperText={errors.email}
                        />
                        <TextFieldIcon
                            name='password'
                            label="Senha"
                            icon={<Lock />}
                            type='password'
                            position={{
                                top: { sm: '58%', md: '58%' },
                                left: { sm: '50%', md: '50%' },
                                transform: { sm: 'translate(-50%, -50%)', md: 'translate(-50%, -50%)' }
                            }}
                            fontSize={{ sm: '0.86rem', md: '0.86rem', lg: '1rem' }}
                            width={{ sm: '100%', md: '100%', lg: '100%' }}
                            height='11%'
                            onChange={handleChange}
                            helperText={errors.password}
                        />

                        <FilledButton
                            width={{ sm: '100%', md: '100%' }}
                            height='10.5%'
                            position={{
                                top: { sm: '80%', md: '80%' },
                                left: { sm: '50%', md: '50%' },
                                transform: { sm: 'translate(-50%, -50%)', md: 'translate(-50%, -50%)' }
                            }}
                            fontSize={{ sm: '1rem', md: '1.1rem', lg: '1.2rem' }}
                            label="Entrar"
                            onClick={handleSubmit}
                        />

                        <Grid item xs={5}>
                            <TextComponent
                                fontSize={{ sm: '0.86rem', md: '0.86rem', lg: '0.86rem' }}
                                width={{ sm: '41%', md: '41%', lg: '41%' }}
                                color={currentTheme.palette.text.secondary}
                                position={{
                                    top: { sm: '93%', md: '93%' }
                                }}
                                text="Novo por aqui?"
                                textAlign='left'
                            />
                        </Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={5}>
                            <Link to="/register">
                                <TextComponent
                                    fontSize={{ sm: '0.86rem', md: '0.86rem', lg: '0.86rem' }}
                                    width={{ sm: '41%', md: '41%', lg: '41%' }}
                                    color={currentTheme.palette.primary.main}
                                    position={{
                                        top: { sm: '93%', md: '93%' }
                                    }}
                                    text="Crie uma conta"
                                    fontWeight='bold'
                                    textAlign='right'
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </BoxComponent>
            </div>
        </ThemeProvider >
    );
};

export default LoginPage;
