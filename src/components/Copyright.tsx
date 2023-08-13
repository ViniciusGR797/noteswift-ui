import React from 'react';
import { Box } from '@mui/material';
import { Copyright as CopyrightIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Copyright: React.FC = () => {
    const styles: React.CSSProperties = {
        position: 'fixed',
        bottom: '2%',
        left: '2%',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.2vw',
        color: useTheme().palette.secondary.main,
        fontFamily: 'Montserrat, sans-serif', 
    };

    return (
        <Box style={styles}>
            <CopyrightIcon style={{ fontSize: '1.2vw', marginRight: '0.5vw' }} />
            Grib
        </Box>
    );
};

export default Copyright;

