interface EditPhotosRequest {
    "RegionId": string;
    "PhotoId": number[];
    "StoreName": string;
    "ShareExpireTime"?: number;
    "TakenAt"?: number;
    "Title"?: string;
    "Remark"?: string;
    "LibraryId"?: string;
}
export { EditPhotosRequest };