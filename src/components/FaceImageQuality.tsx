import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ImageUploader from './common/ImageUploader';
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

const FaceImageQuality: React.FC = () => {
    const [crops, setCrops] = useState<ICrops[]>([]);
    const [resultImage, setResultImage] = useState("");
    const [imgFile, setImgFile] = useState<File>();

    const processImage = (file: File, detect: any) => {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (ctx) {
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

    useEffect(() => {
        handleFaceDetection();
    }, [imgFile]);

    const handleImageChange = (file: File) => {
        setImgFile(file);
    }

    const handleFaceDetection = () => {
        // faceDetectApi(file, () => {})
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        if (!imgFile) return;
        const res = faceDetectApiMock();
        if (res && res.results && res.results.detections) {
            setCrops(res.results.detections);
        }
        processImage(imgFile as File, res.results.detections);
        //setResultImage()
        
    }
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
                <ImageUploader src={resultImage} onImageChange={handleImageChange} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container spacing={2} sx={{marginTop:2}}>
                    {crops?.map((row: ICrops, index: number) => (
                        <Grid item xs={12}>
                            <DetectResult data={row} _id={index}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default FaceImageQuality;
