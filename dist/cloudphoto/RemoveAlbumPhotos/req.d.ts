interface RemoveAlbumPhotosRequest {
    "RegionId": string;
    "AlbumId": number;
    "PhotoId": number[];
    "StoreName": string;
    "LibraryId"?: string;
}
export { RemoveAlbumPhotosRequest };