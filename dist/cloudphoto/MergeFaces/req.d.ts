interface MergeFacesRequest {
    "RegionId": string;
    "FaceId": number[];
    "TargetFaceId": number;
    "StoreName": string;
    "LibraryId"?: string;
}
export { MergeFacesRequest };