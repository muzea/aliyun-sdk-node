interface AddAlbumPhotosRequest {
    "RegionId": string;
    "AlbumId": number;
    "PhotoId": number[];
    "StoreName": string;
    "LibraryId"?: string;
}
export { AddAlbumPhotosRequest };