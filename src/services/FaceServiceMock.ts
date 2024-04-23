
export const faceDetectApiMock = () => {
    let res = {
        "code": 0,
        "detectionTime": 0.8991893,
        "elapsedTime": 6.4413913,
        "msg": "FACER_OK",
        "results": {
            "detections": [
                {
                    "attributes": {
                        "details": [
                            {
                                "name": "Age",
                                "value": [
                                    29,
                                    35
                                ]
                            },
                            {
                                "confidence": 0.8400000333786011,
                                "name": "EyeRight",
                                "value": "open"
                            },
                            {
                                "confidence": 1,
                                "name": "EyeLeft",
                                "value": "open"
                            },
                            {
                                "confidence": 0.9502228498458862,
                                "name": "Emotion",
                                "value": "emotional"
                            },
                            {
                                "confidence": 1,
                                "name": "Smile",
                                "value": "yes"
                            },
                            {
                                "confidence": 1,
                                "name": "Glasses",
                                "value": "no"
                            },
                            {
                                "confidence": 1,
                                "name": "HeadCovering",
                                "value": "no"
                            },
                            {
                                "confidence": 0.9918381571769714,
                                "name": "ForeheadCovering",
                                "value": "no"
                            },
                            {
                                "confidence": 1,
                                "name": "Mouth",
                                "value": "open"
                            },
                            {
                                "confidence": 1,
                                "name": "MedicalMask",
                                "value": "no"
                            },
                            {
                                "confidence": 1,
                                "name": "Occlusion",
                                "value": "no"
                            },
                            {
                                "confidence": 0.9999997615814209,
                                "name": "StrongMakeup",
                                "value": "no"
                            },
                            {
                                "confidence": 0.9999910593032837,
                                "name": "Headphones",
                                "value": "no"
                            }
                        ],
                        "elapsedTime": 1.4894708
                    },
                    "crop": "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",
                    "landmarks": [
                        [
                            834,
                            175
                        ],
                        [
                            878,
                            143
                        ],
                        [
                            869,
                            180
                        ],
                        [
                            863,
                            212
                        ],
                        [
                            904,
                            186
                        ]
                    ],
                    "quality": {},
                    "roi": [
                        802,
                        100,
                        131,
                        148
                    ],
                    "rotationAngle": 34.1795814572149
                },
                {
                    "attributes": {
                        "details": [
                            {
                                "name": "Age",
                                "value": [
                                    5,
                                    11
                                ]
                            },
                            {
                                "confidence": 1,
                                "name": "EyeRight",
                                "value": "open"
                            },
                            {
                                "confidence": 1,
                                "name": "EyeLeft",
                                "value": "open"
                            },
                            {
                                "confidence": 0.9463192820549011,
                                "name": "Emotion",
                                "value": "emotional"
                            },
                            {
                                "confidence": 0.8535301685333252,
                                "name": "Smile",
                                "value": "no"
                            },
                            {
                                "confidence": 1,
                                "name": "Glasses",
                                "value": "no"
                            },
                            {
                                "confidence": 0.998776376247406,
                                "name": "HeadCovering",
                                "value": "no"
                            },
                            {
                                "confidence": 0.9741318225860596,
                                "name": "ForeheadCovering",
                                "value": "no"
                            },
                            {
                                "confidence": 1,
                                "name": "Mouth",
                                "value": "open"
                            },
                            {
                                "confidence": 1,
                                "name": "MedicalMask",
                                "value": "no"
                            },
                            {
                                "confidence": 0.9969344139099121,
                                "name": "Occlusion",
                                "value": "no"
                            },
                            {
                                "confidence": 0.9635539054870605,
                                "name": "StrongMakeup",
                                "value": "no"
                            },
                            {
                                "confidence": 0.9816982746124268,
                                "name": "Headphones",
                                "value": "no"
                            }
                        ],
                        "elapsedTime": 1.6489233
                    },
                    "crop": "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",
                    "landmarks": [
                        [
                            222,
                            665
                        ],
                        [
                            271,
                            641
                        ],
                        [
                            273,
                            674
                        ],
                        [
                            250,
                            714
                        ],
                        [
                            290,
                            695
                        ]
                    ],
                    "quality": {},
                    "roi": [
                        170,
                        594,
                        137,
                        157
                    ],
                    "rotationAngle": 24.703457246633906
                },
                {
                    "attributes": {
                        "details": [
                            {
                                "name": "Age",
                                "value": [
                                    24,
                                    30
                                ]
                            },
                            {
                                "confidence": 1,
                                "name": "EyeRight",
                                "value": "open"
                            },
                            {
                                "confidence": 1,
                                "name": "EyeLeft",
                                "value": "open"
                            },
                            {
                                "confidence": 0.9576237201690674,
                                "name": "Emotion",
                                "value": "emotional"
                            },
                            {
                                "confidence": 1,
                                "name": "Smile",
                                "value": "yes"
                            },
                            {
                                "confidence": 1,
                                "name": "Glasses",
                                "value": "no"
                            },
                            {
                                "confidence": 0.9997898936271667,
                                "name": "HeadCovering",
                                "value": "no"
                            },
                            {
                                "confidence": 0.9512034058570862,
                                "name": "ForeheadCovering",
                                "value": "no"
                            },
                            {
                                "confidence": 1,
                                "name": "Mouth",
                                "value": "open"
                            },
                            {
                                "confidence": 1,
                                "name": "MedicalMask",
                                "value": "no"
                            },
                            {
                                "confidence": 0.9874690771102905,
                                "name": "Occlusion",
                                "value": "no"
                            },
                            {
                                "confidence": 0.9954188466072083,
                                "name": "StrongMakeup",
                                "value": "no"
                            },
                            {
                                "confidence": 0.999999463558197,
                                "name": "Headphones",
                                "value": "no"
                            }
                        ],
                        "elapsedTime": 1.3381971
                    },
                    "crop": "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",
                    "landmarks": [
                        [
                            584,
                            231
                        ],
                        [
                            642,
                            227
                        ],
                        [
                            623,
                            269
                        ],
                        [
                            582,
                            287
                        ],
                        [
                            642,
                            284
                        ]
                    ],
                    "quality": {},
                    "roi": [
                        530,
                        153,
                        137,
                        187
                    ],
                    "rotationAngle": 0.663297066695908
                }
            ],
            "detectorType": 4,
            "landmarksType": 2,
            "scenario": ""
        },
        "metadata": {
            "serverTime": "2024-04-23T20:44:47.832829",
            "ctx": {
                "userIp": "127.0.0.1"
            }
        }
    };

    return res;
};
