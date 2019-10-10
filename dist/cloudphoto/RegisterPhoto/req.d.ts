interface RegisterPhotoRequest {
    "RegionId": string;
    "Location": string;
    "StoreName": string;
    "Size": number;
    "TakenAt"?: number;
    "LibraryId"?: string;
    "Latitude"?: number;
    "Longitude"?: number;
    "Width"?: number;
    "Height"?: number;
    "IsVideo"?: string;
    "Md5"?: string;
    "PhotoTitle"?: string;
    "Remark"?: string;
}
export { RegisterPhotoRequest };