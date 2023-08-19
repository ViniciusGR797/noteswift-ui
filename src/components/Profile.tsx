import React from 'react';
import { Box, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme } from '@mui/material/styles';

interface ProfileProps {
  name: string;
}

const Profile: React.FC<ProfileProps> = ({ name }) => {
  const styles: React.CSSProperties = {
    position: 'fixed',
    top: '5%',
    right: '2%',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5vw',
    color: useTheme().palette.text.primary,
  };

  return (
    <Box style={styles}>
      {name}
      <AccountCircleIcon style={{ fontSize: '3.2vw', marginLeft: '0.7vw' }} />
    </Box>
  );
};

export default Profile;
