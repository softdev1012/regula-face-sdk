import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ImageUploader from './common/ImageUploader';
import { faceDetectApi } from '../services/FaceService';
import { colorList, drawPoint, drawRect, faceMatchingApiMock } from '../services';
import MatchingResult from './FaceMatching/MatchingResult';

const FaceMatching: React.FC = () => {
    const [crops, setCrops] = useState<any[]>([]);
    const [faces, setFaces] = useState<any>();
    const [resultImage1, setResultImage1] = useState("");
    const [resultImage2, setResultImage2] = useState("");
    const [imgFile1, setImgFile1] = useState<File>();
    const [imgFile2, setImgFile2] = useState<File>();

    const getBorderColor = (idx: number, faceIdx: number) : string => {
        if (!faces || !faces[0] || !faces[0].faces) return colorList[faceIdx];
        const _id = idx * (faces[0].faces.length) + faceIdx;
        return colorList[_id];
    }

    const processImage = (file: File, detect: any, setFile: any) => {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        debugger;
        image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (ctx) {
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image, 0, 0);
                if (detect.faces) {
                    for (let i in detect.faces) {
                        const color = getBorderColor(detect.imageIndex, detect.faces[i].faceIndex);
                        drawRect(ctx, detect.faces[i].roi[0], detect.faces[i].roi[1], detect.faces[i].roi[2], detect.faces[i].roi[3], color);
                        for (var j in detect.faces[i].landmarks) {
                            drawPoint(ctx, detect.faces[i].landmarks[j][0], detect.faces[i].landmarks[j][1], color);
                        }
                    }
                }
                
                const dataURL = canvas.toDataURL('image/jpeg');
                setFile(dataURL);
            }
        }
    }

    useEffect(() => {
        handleFaceDetection();
    }, [imgFile1, imgFile2]);

    const handleImage1Change = (file: File) => {
        setImgFile1(file);
    }
    const handleImage2Change = (file: File) => {
        setImgFile2(file);
    }

    const handleFaceDetection = () => {
        // faceDetectApi(file, () => {})
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        if (!imgFile1 || !imgFile2) return;
        const res = faceMatchingApiMock();
        if (res && res.results) {
            setCrops(res.results);
        }
        if (res && res.detections) {
            setFaces(res.detections);
        }
        processImage(imgFile1 as File, res.detections[0], setResultImage1);
        processImage(imgFile2 as File, res.detections[1], setResultImage2);
        //setResultImage()
        
    }
    return (
        <Grid container spacing={0}>
            <Grid item xs={6} md={4}>
                <ImageUploader src={resultImage1} onImageChange={handleImage1Change} />
            </Grid>
            <Grid item xs={6} md={4}>
                <ImageUploader src={resultImage2} onImageChange={handleImage2Change} />
            </Grid>
            <Grid item xs={12} md={4}>
                <Grid container spacing={2} sx={{marginTop:2}}>
                    {crops?.map((row: any, index: number) => (
                        <Grid item xs={12} key={index}>
                            <MatchingResult data={row} faces={faces} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default FaceMatching;
