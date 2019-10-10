interface ListMomentPhotosRequest {
    "RegionId": string;
    "MomentId": number;
    "State": string;
    "StoreName": string;
    "Direction"?: string;
    "Size"?: number;
    "Cursor"?: string;
    "LibraryId"?: string;
}
export { ListMomentPhotosRequest };