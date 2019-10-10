interface EditEventRequest {
    "RegionId": string;
    "StoreName": string;
    "EventId": string;
    "LibraryId"?: string;
    "Identity"?: string;
    "Title"?: string;
    "StartAt"?: number;
    "EndAt"?: number;
    "WeixinTitle"?: string;
    "SplashPhotoId"?: string;
    "BannerPhotoId"?: string;
    "WatermarkPhotoId"?: string;
    "Remark"?: string;
}
export { EditEventRequest };