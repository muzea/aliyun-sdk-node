interface TagPhotoRequest {
    "RegionId": string;
    "StoreName": string;
    "TagKey": string[];
    "LibraryId"?: string;
    "Confidence"?: number[];
    "PhotoId"?: number;
}
export { TagPhotoRequest };