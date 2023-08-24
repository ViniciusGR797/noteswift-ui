import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Alert, AlertColor, Box, Collapse, Snackbar, SnackbarOrigin, Theme, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface NotificationSnackBarProps {
    position?: SnackbarOrigin;
    open?: boolean;
    onClose?: (event: any, reason?: string) => void;
    borderColor?: string;
    severity?: AlertColor;
    message?: string;
}

const NotificationSnackBar: React.FC<NotificationSnackBarProps> = ({
    position = { vertical: 'bottom', horizontal: 'right' },
    open = false,
    onClose,
    borderColor,
    severity,
    message = '',
}) => {
    const autoHideDuration = 6000;

    const snakeBarStyles: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center'
    };

    const alertStyles: React.CSSProperties = {
        borderRadius: 1.5,
        border: `2px solid ${borderColor}`,
        width: '100%'
    };

    return (
        <Box sx={snakeBarStyles}>
            <Snackbar
                open={open}
                autoHideDuration={autoHideDuration}
                onClose={onClose}
                anchorOrigin={position}
                TransitionComponent={Collapse}
                TransitionProps={{ timeout: 300 }}
            >
                <Box sx={alertStyles}>
                    <Alert onClose={onClose} severity={severity}>
                        {message}
                    </Alert>
                </Box>
            </Snackbar>
        </Box>
    );
};

export default NotificationSnackBar;
