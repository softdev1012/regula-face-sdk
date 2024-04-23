import { Box, Button } from "@mui/material";
import { useState } from "react";
import MuiAvatar from '@mui/material/Avatar';
import UploadIcon from '@mui/icons-material/Upload';
interface ImageUploaderProps {
    _id?: string;
    width?: number;
    height?: number;
    onImageChange?: any;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({height, onImageChange}) => {
    const [selectedImg, setSelectedImg] = useState<string>("");
    const handleSelecImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList;
        const uploadFile = selectedFiles?.[0];
        const imageUrl = URL.createObjectURL(uploadFile);
        setSelectedImg(imageUrl);
        onImageChange(uploadFile)
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <MuiAvatar
                sx={{
                    marginBottom: 1,
                    marginTop: 3,
                    width: "auto",
                    height: {height},
                    borderRadius: 0, // Set borderRadius to 0 for square corners
                }}
                alt="Select Image"
                src={ selectedImg }
            />
            <label className="btn btn-default p-0">
                <input
                    type="file" 
                    accept="image/*"
                    hidden
                    onChange={handleSelecImage}
                />
                <div>
                    <Button variant="contained" component="span" color="secondary" sx={{textTransform:"none"}} startIcon={<UploadIcon/>}>Upload Image</Button>
                </div>
            </label>
        </Box>
    );
};

export default ImageUploader;
