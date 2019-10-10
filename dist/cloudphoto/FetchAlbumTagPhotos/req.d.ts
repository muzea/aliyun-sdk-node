interface FetchAlbumTagPhotosRequest {
    "RegionId": string;
    "AlbumId": number;
    "TagId": number;
    "StoreName": string;
    "Size"?: number;
    "Page"?: number;
    "LibraryId"?: string;
}
export { FetchAlbumTagPhotosRequest };