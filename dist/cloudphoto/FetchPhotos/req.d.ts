interface FetchPhotosRequest {
    "RegionId": string;
    "State": string;
    "StoreName": string;
    "OrderBy"?: string;
    "Order"?: string;
    "Size"?: number;
    "Page"?: number;
    "LibraryId"?: string;
}
export { FetchPhotosRequest };