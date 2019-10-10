interface ListTimeLinePhotosRequest {
    "RegionId": string;
    "StoreName": string;
    "Direction"?: string;
    "Page"?: number;
    "Size"?: number;
    "StartTime"?: number;
    "EndTime"?: number;
    "FilterBy"?: string;
    "Order"?: string;
    "LibraryId"?: string;
}
export { ListTimeLinePhotosRequest };