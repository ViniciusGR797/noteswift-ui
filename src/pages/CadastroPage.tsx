import React, { useEffect, useState } from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import DarkModeToggleButton from '../components/DarkModeToggleButton'; // Importe o componente
import { useDarkMode } from '../contexts/DarkModeContext';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../themes/themes';
import { AlertColor, Button, Grid, Theme } from '@mui/material';
import Copyright from '../components/Copyright';
import LogoBox from '../components/LogoBox';
import TextComponent from '../components/TextComponent';
import FilledButton from '../components/FilledButton';
import OutlinedButton from '../components/OutlinedButton';
import FilledRectangle from '../components/FilledRectangle';
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import TextFieldIcon from '../components/TextFieldIcon';
import { Mail, Person, Lock } from '@mui/icons-material';
import Loading from '../components/Loading';
import UserService from '../services/userService';
import BoxComponent from '../components/BoxComponent';
import { useUserCreated } from '../contexts/UserCreatedContext';
import NotificationSnackBar from '../components/NotificationSnackBar';

const CadastroPage: React.FC = () => {
    const navigate = useNavigate();
    const { userCreated, toggleUserCreated } = useUserCreated();
    const { darkMode, toggleDarkMode } = useDarkMode();
    const currentTheme = darkMode ? darkTheme : lightTheme;

    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [snackBar, setSnackBar] = useState({
        open: false,
        borderColor: '',
        severity: undefined as AlertColor | undefined,
        message: '',
    });

    const handleClose = (event: any, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBar({
            open: false,
            borderColor: snackBar.borderColor,
            severity: snackBar.severity,
            message: snackBar.message,
        });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        const newErrors = {
            name: '',
            email: '',
            password: '',
        };

        if (!inputValues.name) {
            newErrors.name = 'Campo obrigatório';
        }

        if (!inputValues.email) {
            newErrors.email = 'Campo obrigatório';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputValues.email)) {
            newErrors.email = 'Email inválido';
        }

        if (!inputValues.password) {
            newErrors.password = 'Campo obrigatório';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(inputValues.password)) {
            newErrors.password = 'Senha deve conter 8+ caracteres com letras maiúsculas, minúsculas, números e caracteres especiais';
        }

        setErrors(newErrors);

        if (!newErrors.name && !newErrors.email && !newErrors.password) {
            try {
                const response = await UserService.createUser(inputValues.name, inputValues.email, inputValues.password);

                if (!response) {
                    setSnackBar({
                        open: true,
                        borderColor: 'red',
                        severity: "error",
                        message: "Erro ao consumir API",
                    });

                } else if (response.status === 201) {
                    // Salvar token nos cookies
                    // Aqui você deve ter uma função ou utilitário para salvar o token nos cookies
                    // Exemplo: saveTokenToCookies(response.data.token);

                    toggleUserCreated(true)

                    navigate('/login')
                } else {
                    // Caso a resposta não seja 200, trate o erro de acordo com sua necessidade
                    setSnackBar({
                        open: true,
                        borderColor: 'red',
                        severity: "error",
                        message: response.data.msg,
                    });
                }
            } catch (error: any) {
                setSnackBar({
                    open: true,
                    borderColor: 'red',
                    severity: "error",
                    message: "Erro ao realizar cadastro",
                });
            }
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
                    height={{ sm: '85%', md: '85%', lg: '85%' }}
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
                                    top: { sm: '0%', md: '0%' },
                                    left: { sm: '50%', md: '50%' },
                                    transform: { sm: 'translateX(-50%)', md: 'translateX(-50%)' }
                                }}
                                isShort={true}
                            />
                        </Link>

                        <Grid item xs={5}>
                            <TextComponent
                                fontSize={{ sm: '1.2rem', md: '1.5rem', lg: '1.6rem' }}
                                width={{ sm: '41%', md: '41%', lg: '41%' }}
                                color={currentTheme.palette.text.secondary}
                                position={{
                                    top: { sm: '18%', md: '18%' }
                                }}
                                text="Cadastro"
                                fontWeight='bold'
                                textAlign='left'
                            />
                        </Grid>
                        <Grid item xs={7}></Grid>

                        <TextFieldIcon
                            name='name'
                            label="Nome"
                            icon={<Mail />}
                            position={{
                                top: { sm: '35%', md: '35%' },
                                left: { sm: '50%', md: '50%' },
                                transform: { sm: 'translate(-50%, -50%)', md: 'translate(-50%, -50%)' }
                            }}
                            fontSize={{ sm: '0.86rem', md: '0.86rem', lg: '1rem' }}
                            width={{ sm: '100%', md: '100%', lg: '100%' }}
                            height='11%'
                            onChange={handleChange}
                            helperText={errors.name}
                        />
                        <TextFieldIcon
                            name='email'
                            label="Email"
                            icon={<Mail />}
                            position={{
                                top: { sm: '51%', md: '51%' },
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
                                top: { sm: '67%', md: '67%' },
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
                                top: { sm: '82%', md: '82%' },
                                left: { sm: '50%', md: '50%' },
                                transform: { sm: 'translate(-50%, -50%)', md: 'translate(-50%, -50%)' }
                            }}
                            fontSize={{ sm: '1rem', md: '1.1rem', lg: '1.2rem' }}
                            label="Criar"
                            onClick={handleSubmit}
                        />

                        <Grid item xs={7}>
                            <TextComponent
                                fontSize={{ sm: '0.86rem', md: '0.86rem', lg: '0.86rem' }}
                                width={{ sm: '64%', md: '64%', lg: '64%' }}
                                color={currentTheme.palette.text.secondary}
                                position={{
                                    top: { sm: '92%', md: '92%' }
                                }}
                                text="Já possui uma conta?"
                                textAlign='left'
                            />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={4}>
                            <Link to="/login">
                                <TextComponent
                                    fontSize={{ sm: '0.86rem', md: '0.86rem', lg: '0.86rem' }}
                                    width={{ sm: '33%', md: '33%', lg: '33%' }}
                                    color={currentTheme.palette.primary.main}
                                    position={{
                                        top: { sm: '92%', md: '92%' }
                                    }}
                                    text="Faça Login"
                                    fontWeight='bold'
                                    textAlign='right'
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </BoxComponent>

                <NotificationSnackBar
                    open={snackBar.open}
                    onClose={handleClose}
                    borderColor={snackBar.borderColor}
                    severity={snackBar.severity}
                    message={snackBar.message}
                />

            </div>
        </ThemeProvider>
    );
};

export default CadastroPage;
