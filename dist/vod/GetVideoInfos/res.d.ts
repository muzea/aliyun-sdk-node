// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.PlayInfo
export interface PlayInfo {
	Height: string;
	JobId: string;
	Format: string;
	Fps: string;
	Bitrate: string;
	Encrypt: number;
	Rand: string;
	StreamType: string;
	Width: string;
	Duration: string;
	Complexity: string;
	Size: string;
	Definition: string;
	Plaintext: string;
	PlayURL: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Thumbnail
export interface Thumbnail {
	URL: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Video
export interface Video {
	MediaSource: string;
	AuditManualStatus: string;
	ModifyTime: string;
	Title: string;
	CreateTime: string;
	TemplateGroupId: string;
	MediaType: string;
	CustomMediaInfo: string;
	AuditAIStatus: string;
	RegionId: string;
	Duration: number;
	CateName: string;
	Size: number;
	Description: string;
	CateId: number;
	Tags: string;
	PreprocessStatus: string;
	TranscodeMode: string;
	ModificationTime: string;
	StorageLocation: string;
	CreationTime: string;
	AuditAIResult: string;
	CoverURL: string;
	AppId: string;
	AuditTemplateId: string;
	Status: string;
	AuditStatus: string;
	DownloadSwitch: string;
	VideoId: string;
	SpriteSnapshots: string[];
	Snapshots: string[];
	PlayInfoList: PlayInfo[];
	ThumbnailList: Thumbnail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetVideoInfosResponse
export interface GetVideoInfosResponse {
	RequestId: string;
	NonExistVideoIds: string[];
	VideoList: Video[];
}

