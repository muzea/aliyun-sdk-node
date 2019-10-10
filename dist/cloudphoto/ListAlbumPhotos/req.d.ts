interface ListAlbumPhotosRequest {
    "RegionId": string;
    "AlbumId": number;
    "State": string;
    "StoreName": string;
    "Direction"?: string;
    "Size"?: number;
    "Cursor"?: string;
    "LibraryId"?: string;
}
export { ListAlbumPhotosRequest };