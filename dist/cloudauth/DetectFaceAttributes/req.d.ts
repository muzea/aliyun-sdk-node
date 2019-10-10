interface DetectFaceAttributesRequest {
    "RegionId"?: string;
    "MaterialValue": string;
    "DontSaveDB": boolean;
    "ClientTag": string;
    "MaxNumPhotosPerCategory": number;
    "RetAttributes": string;
    "MaxFaceNum": number;
    "SourceIp"?: string;
}
export { DetectFaceAttributesRequest };