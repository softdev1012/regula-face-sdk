import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import ImageUploader from './ImageUploader';
import { faceDetectApi } from '../services/FaceService';
import { colorList, drawPoint, drawRect, faceDetectApiMock } from '../services';
import DetectResult from './FaceDetection/DetectResult';

interface ICrops {
    crop?: string,
    attributes?: any,
    landmarks?: any,
    quality?: any,
    roi?: number[],
    rotationAngle?: number,
}

const FaceDetection: React.FC = () => {
    const [crops, setCrops] = useState<ICrops[]>([]);
    const [resultImage, setResultImage] = useState("");

    const processImage = (file: File, detect: any) => {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (ctx) {
                debugger;
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image, 0, 0);
                for (let i in detect) {
                    const ic = parseInt(i);
                    drawRect(ctx, detect[i].roi[0], detect[i].roi[1], detect[i].roi[2], detect[i].roi[3], colorList[ic]);
                    for (var j in detect[i].landmarks) {
                        drawPoint(ctx, detect[i].landmarks[j][0], detect[i].landmarks[j][1], colorList[ic]);
                    }
                }
                const dataURL = canvas.toDataURL('image/jpeg');
                setResultImage(dataURL);
            }
        }
    }

      
    const handleFaceDetection = (file: File) => {
        // faceDetectApi(file, () => {})
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        const res = faceDetectApiMock();
        if (res && res.results && res.results.detections) {
            setCrops(res.results.detections);
        }
        processImage(file as File, res.results.detections);
        //setResultImage()
        
    }
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
            }}
        >
            <Grid container spacing={2} sx={{width:'50%'}}>
                <Grid item xs={12}>
                    <ImageUploader height={400} src={resultImage} onImageChange={handleFaceDetection} />
                </Grid>
            </Grid>
            <Grid width={50}></Grid>
            <Grid container spacing={2} sx={{marginTop:2, width:'50%'}}>
                {crops?.map((row: ICrops, index: number) => (
                    <Grid item xs={12}>
                        <DetectResult data={row} _id={index}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FaceDetection;
