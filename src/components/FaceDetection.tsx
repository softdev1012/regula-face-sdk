import React from 'react';
import { Box, Grid } from '@mui/material';
import ImageUploader from './ImageUploader';
import { faceDetectApi } from '../services/FaceService';


const FaceDetection: React.FC = () => {

    const handleFaceDetection = (file: File) => {
        faceDetectApi(file, () => {})
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
        debugger;
    }
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
                    <ImageUploader height={400} onImageChange={handleFaceDetection} />
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
