// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.SnapshotsInGetVideoInfo
export interface SnapshotsInGetVideoInfo {
	Snapshot: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Thumbnail
export interface Thumbnail {
	URL: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.ThumbnailListInGetVideoInfo
export interface ThumbnailListInGetVideoInfo {
	Thumbnail: Thumbnail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.VideoInGetVideoInfo
export interface VideoInGetVideoInfo {
	VideoId: string;
	Title: string;
	Tags: string;
	Status: string;
	Size: number;
	Duration: number;
	Description: string;
	CreateTime: string;
	ModifyTime: string;
	ModificationTime: string;
	CreationTime: string;
	CoverURL: string;
	CateId: number;
	CateName: string;
	DownloadSwitch: string;
	TemplateGroupId: string;
	PreprocessStatus: string;
	StorageLocation: string;
	RegionId: string;
	CustomMediaInfo: string;
	AuditStatus: string;
	AppId: string;
	Snapshots: SnapshotsInGetVideoInfo;
	ThumbnailList: ThumbnailListInGetVideoInfo;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetVideoInfoResponse
export interface GetVideoInfoResponse {
	RequestId: string;
	AI: string;
	Video: VideoInGetVideoInfo;
}

