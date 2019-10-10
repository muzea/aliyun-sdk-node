interface RemoveFacePhotosRequest {
    "RegionId": string;
    "FaceId": number;
    "PhotoId": number[];
    "StoreName": string;
    "LibraryId"?: string;
}
export { RemoveFacePhotosRequest };