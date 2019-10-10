interface FetchMomentPhotosRequest {
    "RegionId": string;
    "MomentId": number;
    "StoreName": string;
    "OrderBy"?: string;
    "Order"?: string;
    "Size"?: number;
    "Page"?: number;
    "LibraryId"?: string;
}
export { FetchMomentPhotosRequest };