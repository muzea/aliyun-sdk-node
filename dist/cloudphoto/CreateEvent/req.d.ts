interface CreateEventRequest {
    "RegionId": string;
    "StoreName": string;
    "Title": string;
    "StartAt": number;
    "EndAt": number;
    "Identity": string;
    "LibraryId"?: string;
    "WeixinTitle"?: string;
    "SplashPhotoId"?: string;
    "BannerPhotoId"?: string;
    "WatermarkPhotoId"?: string;
    "Remark"?: string;
}
export { CreateEventRequest };