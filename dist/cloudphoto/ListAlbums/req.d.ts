interface ListAlbumsRequest {
    "RegionId": string;
    "State": string;
    "StoreName": string;
    "Direction"?: string;
    "Size"?: number;
    "Cursor"?: string;
    "LibraryId"?: string;
}
export { ListAlbumsRequest };