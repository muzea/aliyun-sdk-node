interface CreatePhotoRequest {
    "RegionId": string;
    "FileId": string;
    "SessionId": string;
    "StoreName": string;
    "UploadType"?: string;
    "PhotoTitle"?: string;
    "Remark"?: string;
    "LibraryId"?: string;
    "Staging"?: string;
    "ShareExpireTime"?: number;
    "TakenAt"?: number;
}
export { CreatePhotoRequest };