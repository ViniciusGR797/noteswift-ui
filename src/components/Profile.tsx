import React, { useEffect, useState } from 'react';
import { Box, Avatar, Theme, useMediaQuery, Skeleton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme } from '@mui/material/styles';

interface ProfileProps {
  name: string;
}

const Profile: React.FC<ProfileProps> = ({ name }) => {
  const theme = useTheme();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const font = smDown ? '0rem' : mdDown ? '1.1rem' : '1.5rem';
  const fontIcon = smDown ? '3rem' : mdDown ? '2.5rem' : '3rem';
  const margin = smDown ? '0rem' : mdDown ? '0.5rem' : '0.5rem';
  const width = smDown ? '0rem' : mdDown ? '4rem' : '6rem';
  const screenName = smDown ? '' : name;

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDataLoaded(true);
    }, 800);
  }, []);

  const profileStyles: React.CSSProperties = {
    position: 'fixed',
    top: '5%',
    right: '2%',
    display: 'flex',
    alignItems: 'center',
    fontSize: font,
    color: theme.palette.text.primary,
  };

  return (
    <Box style={profileStyles}>
      {isDataLoaded ? (
        <>
          <Box style={profileStyles}>
            {screenName}
            <AccountCircleIcon style={{ fontSize: fontIcon, marginLeft: margin }} />
          </Box>
        </>
      ) : (
        <div style={profileStyles}>
          <Skeleton width={width} height={font} />
          <Skeleton variant="circular" width={fontIcon} height={fontIcon} style={{ marginLeft: margin }} />          
        </div>
      )}
    </Box>
  );
};

export default Profile;
