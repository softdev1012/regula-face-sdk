import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MuiAvatar from '@mui/material/Avatar';


const FaceDetection: React.FC = () => {
  return (
    <Box
        sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
        }}
    >
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <MuiAvatar
                    sx={{
                        marginBottom: 1,
                        width: '400px',
                        height: '400px',
                        borderRadius: 0, // Set borderRadius to 0 for square corners
                    }}
                    alt="Avatar Change"
                />
            </Grid>
        </Grid>
        <Grid width={20}></Grid>
        <Grid container spacing={2}>
            <Grid item xs={12}>

            </Grid>
        </Grid>
    </Box>
  );
};

export default FaceDetection;
