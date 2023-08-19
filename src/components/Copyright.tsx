import React, { useState, useEffect } from 'react';
import { Box, Theme, useMediaQuery, Skeleton } from '@mui/material';
import { Copyright as CopyrightIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Copyright: React.FC = () => {
    const theme = useTheme();
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    const font = smDown ? '0.8rem' : mdDown ? '1rem' : '1.2rem';
    const margin = smDown ? '0.1rem' : mdDown ? '0.15rem' : '0.2rem';
    const width = smDown ? '1.5rem' : mdDown ? '1.8rem' : '2.4rem';
    const marginTop = smDown ? '-1.2rem' : mdDown ? '-1.5rem' : '-1.8rem';

    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        setIsDataLoaded(true);
    }, []);

    const styles: React.CSSProperties = {
        position: 'fixed',
        bottom: '2%',
        left: '2%',
        display: 'flex',
        alignItems: 'center',
        fontSize: font,
        color: theme.palette.text.primary,
    };

    const skeletonStyles: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        marginTop: marginTop,
    };

    return (
        <Box style={styles}>
            {isDataLoaded ? (
                <>
                    <CopyrightIcon style={{ fontSize: font, marginRight: margin }} />
                    Grib
                </>
            ) : (
                <div style={skeletonStyles}>
                    <Skeleton variant="circular" width={font} height={font} style={{ marginRight: margin }} />
                    <Skeleton width={width} height={font} />
                </div>
            )}
        </Box>
    );
};

export default Copyright;
