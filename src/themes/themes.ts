import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#5AA5FF',
        },
        secondary: {
            main: '#E8EAEB',
        },
        text: {
            primary: '#656565',
            secondary: '#000000',
        },
        background: {
            default: '#F5F5F5',
            paper: '#FAFAFA',
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#31ACEF',
        },
        secondary: {
            main: '#6397B7',
        },
        text: {
            primary: '#DCDCDC',
            secondary: '#FFFFFF',
        },
        background: {
            default: '#505050',
            paper: '#656565',
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
});

export { lightTheme, darkTheme };
