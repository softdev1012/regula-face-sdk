import instance from './axiosInstance';

export const faceDetectApi = (file: File, onUploadProgress: any): Promise<any> => {
  let formData = new FormData();

  formData.append("image", file);

  let processParamData:any = {
      "outputImageParams": { "crop": {"type": 1, "size": [106, 134]} },
      "attributes": {
          "config": [
              {"name": "Age"},
              {"name": "EyeRight"},
              {"name": "EyeLeft"},
              {"name": "Emotion"},
              {"name": "Smile"},
              {"name": "Glasses"},
              {"name": "HeadCovering"},
              {"name": "ForeheadCovering"},
              {"name": "Mouth"},
              {"name": "MedicalMask"},
              {"name": "Occlusion"},
              {"name": "StrongMakeup"},
              {"name": "Headphones"}
          ]
      },
      "onlyCentralFace": false
  };
  formData.append("processParam", processParamData);
  
  return instance.post('http://localhost:41101/api/detect', formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};
