interface MoveFacePhotosRequest {
    "RegionId": string;
    "SourceFaceId": number;
    "PhotoId": number[];
    "TargetFaceId": number;
    "StoreName": string;
    "LibraryId"?: string;
}
export { MoveFacePhotosRequest };