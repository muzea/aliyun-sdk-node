interface MoveAlbumPhotosRequest {
    "RegionId": string;
    "SourceAlbumId": number;
    "PhotoId": number[];
    "TargetAlbumId": number;
    "StoreName": string;
    "LibraryId"?: string;
}
export { MoveAlbumPhotosRequest };