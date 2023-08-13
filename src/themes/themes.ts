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
    },
});

export { lightTheme, darkTheme };
