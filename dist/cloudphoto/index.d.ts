interface CLOUDPHOTO {
    ActivatePhotos(query: {
        "RegionId": string;
        "PhotoId": number[];
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    AddAlbumPhotos(query: {
        "RegionId": string;
        "AlbumId": number;
        "PhotoId": number[];
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    CreateAlbum(query: {
        "RegionId": string;
        "AlbumName": string;
        "StoreName": string;
        "Remark"?: string;
        "LibraryId"?: string;
    }): Promise<{}>;
    CreateEvent(query: {
        "RegionId": string;
        "StoreName": string;
        "Title": string;
        "StartAt": number;
        "EndAt": number;
        "Identity": string;
        "LibraryId"?: string;
        "WeixinTitle"?: string;
        "SplashPhotoId"?: string;
        "BannerPhotoId"?: string;
        "WatermarkPhotoId"?: string;
        "Remark"?: string;
    }): Promise<{}>;
    CreatePhoto(query: {
        "RegionId": string;
        "FileId": string;
        "SessionId": string;
        "StoreName": string;
        "UploadType"?: string;
        "PhotoTitle"?: string;
        "Remark"?: string;
        "LibraryId"?: string;
        "Staging"?: string;
        "ShareExpireTime"?: number;
        "TakenAt"?: number;
    }): Promise<{}>;
    CreatePhotoStore(query: {
        "RegionId": string;
        "StoreName": string;
        "DefaultQuota": number;
        "BucketName": string;
        "Remark"?: string;
    }): Promise<{}>;
    CreateTransaction(query: {
        "RegionId": string;
        "Size": number;
        "StoreName": string;
        "Ext"?: string;
        "Force"?: string;
        "Md5"?: string;
        "LibraryId"?: string;
    }): Promise<{}>;
    DeleteAlbums(query: {
        "RegionId": string;
        "AlbumId": number[];
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    DeleteEvent(query: {
        "RegionId": string;
        "EventId": number;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    DeleteFaces(query: {
        "RegionId": string;
        "FaceId": number[];
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    DeletePhotoStore(query: {
        "RegionId": string;
        "StoreName": string;
    }): Promise<{}>;
    DeletePhotos(query: {
        "RegionId": string;
        "StoreName": string;
        "PhotoId": number[];
        "LibraryId"?: string;
    }): Promise<{}>;
    EditEvent(query: {
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
    }): Promise<{}>;
    EditPhotoStore(query: {
        "RegionId": string;
        "StoreName": string;
        "AutoCleanEnabled"?: string;
        "AutoCleanDays"?: number;
        "DefaultQuota"?: number;
        "DefaultTrashQuota"?: number;
        "Remark"?: string;
    }): Promise<{}>;
    EditPhotos(query: {
        "RegionId": string;
        "PhotoId": number[];
        "StoreName": string;
        "ShareExpireTime"?: number;
        "TakenAt"?: number;
        "Title"?: string;
        "Remark"?: string;
        "LibraryId"?: string;
    }): Promise<{}>;
    FetchAlbumTagPhotos(query: {
        "RegionId": string;
        "AlbumId": number;
        "TagId": number;
        "StoreName": string;
        "Size"?: number;
        "Page"?: number;
        "LibraryId"?: string;
    }): Promise<{}>;
    FetchLibraries(query: {
        "RegionId": string;
        "StoreName": string;
        "Page"?: number;
        "Size"?: number;
        "NeedQuota"?: boolean;
    }): Promise<{}>;
    FetchMomentPhotos(query: {
        "RegionId": string;
        "MomentId": number;
        "StoreName": string;
        "OrderBy"?: string;
        "Order"?: string;
        "Size"?: number;
        "Page"?: number;
        "LibraryId"?: string;
    }): Promise<{}>;
    FetchPhotos(query: {
        "RegionId": string;
        "State": string;
        "StoreName": string;
        "OrderBy"?: string;
        "Order"?: string;
        "Size"?: number;
        "Page"?: number;
        "LibraryId"?: string;
    }): Promise<{}>;
    GetAlbumsByNames(query: {
        "RegionId": string;
        "Name": string[];
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    GetDownloadUrl(query: {
        "RegionId": string;
        "PhotoId": number;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    GetDownloadUrls(query: {
        "RegionId": string;
        "PhotoId": number[];
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    GetEvent(query: {
        "RegionId": string;
        "EventId": number;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    GetFramedPhotoUrls(query: {
        "RegionId": string;
        "PhotoId": number[];
        "FrameId": string;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    GetLibrary(query: {
        "RegionId": string;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    GetPhotos(query: {
        "RegionId": string;
        "PhotoId": number[];
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    GetPhotosByMd5s(query: {
        "RegionId": string;
        "Md5": string[];
        "State": string;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    GetPrivateAccessUrls(query: {
        "RegionId": string;
        "PhotoId": number[];
        "ZoomType": string;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    GetPublicAccessUrls(query: {
        "RegionId": string;
        "PhotoId": number[];
        "ZoomType": string;
        "StoreName": string;
        "DomainType"?: string;
        "LibraryId"?: string;
    }): Promise<{}>;
    GetQuota(query: {
        "RegionId": string;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    GetSimilarPhotos(query: {
        "RegionId": string;
        "PhotoId": number;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    GetThumbnail(query: {
        "RegionId": string;
        "PhotoId": number;
        "ZoomType": string;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    GetThumbnails(query: {
        "RegionId": string;
        "PhotoId": number[];
        "ZoomType": string;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    GetVideoCover(query: {
        "RegionId": string;
        "PhotoId": number;
        "ZoomType": string;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    InactivatePhotos(query: {
        "RegionId": string;
        "PhotoId": number[];
        "StoreName": string;
        "LibraryId"?: string;
        "InactiveTime"?: number;
    }): Promise<{}>;
    LikePhoto(query: {
        "RegionId": string;
        "PhotoId": number;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    ListAlbumPhotos(query: {
        "RegionId": string;
        "AlbumId": number;
        "State": string;
        "StoreName": string;
        "Direction"?: string;
        "Size"?: number;
        "Cursor"?: string;
        "LibraryId"?: string;
    }): Promise<{}>;
    ListAlbums(query: {
        "RegionId": string;
        "State": string;
        "StoreName": string;
        "Direction"?: string;
        "Size"?: number;
        "Cursor"?: string;
        "LibraryId"?: string;
    }): Promise<{}>;
    ListEvents(query: {
        "RegionId": string;
        "State": string;
        "StoreName": string;
        "Direction"?: string;
        "Size"?: number;
        "Cursor"?: string;
    }): Promise<{}>;
    ListFacePhotos(query: {
        "RegionId": string;
        "FaceId": number;
        "State": string;
        "StoreName": string;
        "Direction"?: string;
        "Size"?: number;
        "Cursor"?: string;
        "LibraryId"?: string;
    }): Promise<{}>;
    ListFaces(query: {
        "RegionId": string;
        "State": string;
        "StoreName": string;
        "Direction"?: string;
        "Size"?: number;
        "Cursor"?: string;
        "LibraryId"?: string;
        "HasFaceName"?: string;
    }): Promise<{}>;
    ListMomentPhotos(query: {
        "RegionId": string;
        "MomentId": number;
        "State": string;
        "StoreName": string;
        "Direction"?: string;
        "Size"?: number;
        "Cursor"?: string;
        "LibraryId"?: string;
    }): Promise<{}>;
    ListMoments(query: {
        "RegionId": string;
        "State": string;
        "StoreName": string;
        "Direction"?: string;
        "Size"?: number;
        "Cursor"?: string;
        "LibraryId"?: string;
    }): Promise<{}>;
    ListPhotoFaces(query: {
        "RegionId": string;
        "PhotoId": number;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    ListPhotoStores(query: {
        "RegionId": string;
    }): Promise<{}>;
    ListPhotoTags(query: {
        "RegionId": string;
        "PhotoId": number;
        "StoreName": string;
        "LibraryId"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    ListPhotos(query: {
        "RegionId": string;
        "State": string;
        "StoreName": string;
        "Direction"?: string;
        "Size"?: number;
        "Cursor"?: string;
        "LibraryId"?: string;
    }): Promise<{}>;
    ListRegisteredTags(query: {
        "RegionId": string;
        "StoreName": string;
        "Lang": string[];
    }): Promise<{}>;
    ListTagPhotos(query: {
        "RegionId": string;
        "TagId": number;
        "State": string;
        "StoreName": string;
        "Direction"?: string;
        "Size"?: number;
        "Cursor"?: string;
        "LibraryId"?: string;
    }): Promise<{}>;
    ListTags(query: {
        "RegionId": string;
        "StoreName": string;
        "Lang"?: string;
        "LibraryId"?: string;
    }): Promise<{}>;
    ListTimeLinePhotos(query: {
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
    }): Promise<{}>;
    ListTimeLines(query: {
        "RegionId": string;
        "StoreName": string;
        "Direction"?: string;
        "PhotoSize"?: number;
        "Cursor"?: number;
        "TimeLineCount"?: number;
        "TimeLineUnit"?: string;
        "FilterBy"?: string;
        "Order"?: string;
        "LibraryId"?: string;
    }): Promise<{}>;
    MergeFaces(query: {
        "RegionId": string;
        "FaceId": number[];
        "TargetFaceId": number;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    MoveAlbumPhotos(query: {
        "RegionId": string;
        "SourceAlbumId": number;
        "PhotoId": number[];
        "TargetAlbumId": number;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    MoveFacePhotos(query: {
        "RegionId": string;
        "SourceFaceId": number;
        "PhotoId": number[];
        "TargetFaceId": number;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    ReactivatePhotos(query: {
        "RegionId": string;
        "PhotoId": number[];
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    RegisterPhoto(query: {
        "RegionId": string;
        "Location": string;
        "StoreName": string;
        "Size": number;
        "TakenAt"?: number;
        "LibraryId"?: string;
        "Latitude"?: number;
        "Longitude"?: number;
        "Width"?: number;
        "Height"?: number;
        "IsVideo"?: string;
        "Md5"?: string;
        "PhotoTitle"?: string;
        "Remark"?: string;
    }): Promise<{}>;
    RegisterTag(query: {
        "RegionId": string;
        "StoreName": string;
        "TagKey"?: string;
        "Lang"?: string;
        "Text"?: string;
    }): Promise<{}>;
    RemoveAlbumPhotos(query: {
        "RegionId": string;
        "AlbumId": number;
        "PhotoId": number[];
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    RemoveFacePhotos(query: {
        "RegionId": string;
        "FaceId": number;
        "PhotoId": number[];
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    RenameAlbum(query: {
        "RegionId": string;
        "AlbumId": number;
        "AlbumName": string;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    RenameFace(query: {
        "RegionId": string;
        "FaceId": number;
        "FaceName": string;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    SearchPhotos(query: {
        "RegionId": string;
        "Page": number;
        "Size": number;
        "Keyword": string;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    SetAlbumCover(query: {
        "RegionId": string;
        "AlbumId": number;
        "PhotoId": number;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    SetFaceCover(query: {
        "RegionId": string;
        "FaceId": number;
        "PhotoId": number;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    SetMe(query: {
        "RegionId": string;
        "FaceId": number;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    SetQuota(query: {
        "RegionId": string;
        "TotalQuota": number;
        "StoreName": string;
        "LibraryId"?: string;
    }): Promise<{}>;
    TagPhoto(query: {
        "RegionId": string;
        "StoreName": string;
        "TagKey": string[];
        "LibraryId"?: string;
        "Confidence"?: number[];
        "PhotoId"?: number;
    }): Promise<{}>;
    ToggleFeatures(query: {
        "RegionId": string;
        "StoreName": string;
        "EnabledFeatures"?: string[];
        "DisabledFeatures"?: string[];
    }): Promise<{}>;
    GetPhotoStore(query: {
        "RegionId": string;
        "StoreName": string;
    }): Promise<{}>;
}
export default CLOUDPHOTO;