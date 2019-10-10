interface ListFacePhotosRequest {
    "RegionId": string;
    "FaceId": number;
    "State": string;
    "StoreName": string;
    "Direction"?: string;
    "Size"?: number;
    "Cursor"?: string;
    "LibraryId"?: string;
}
export { ListFacePhotosRequest };