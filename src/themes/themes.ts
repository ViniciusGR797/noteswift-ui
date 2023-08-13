import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#5AA5FF',
        },
        secondary: {
            main: '#656565', 
        },
        background: {
            default: '#FFFFFF',
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
            main: '#DCDCDC', 
        },
        background: {
            default: '#000000',
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif', 
    },
});

export { lightTheme, darkTheme };
