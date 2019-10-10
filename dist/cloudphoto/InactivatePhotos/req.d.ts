interface InactivatePhotosRequest {
    "RegionId": string;
    "PhotoId": number[];
    "StoreName": string;
    "LibraryId"?: string;
    "InactiveTime"?: number;
}
export { InactivatePhotosRequest };