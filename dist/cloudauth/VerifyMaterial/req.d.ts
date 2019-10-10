interface VerifyMaterialRequest {
    "RegionId"?: string;
    "FaceImageUrl": string;
    "BizType": string;
    "BizId": string;
    "Name": string;
    "IdCardNumber": string;
    "SourceIp"?: string;
    "IdCardBackImageUrl"?: string;
    "IdCardFrontImageUrl"?: string;
    "UserId"?: string;
}
export { VerifyMaterialRequest };