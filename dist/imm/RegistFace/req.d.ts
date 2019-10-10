interface RegistFaceRequest {
    "RegionId"?: string;
    "SrcUri": string;
    "GroupName": string;
    "Project": string;
    "User"?: string;
    "IsQualityLimit"?: boolean;
    "ChooseBiggestFace"?: boolean;
    "RegisterCheckLevel"?: string;
}
export { RegistFaceRequest };