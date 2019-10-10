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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Audio
export interface Audio {
	AudioId: string;
	MediaSource: string;
	Title: string;
	Tags: string;
	Status: string;
	Size: number;
	Duration: number;
	Description: string;
	ModificationTime: string;
	CreationTime: string;
	CoverURL: string;
	CateId: number;
	CateName: string;
	DownloadSwitch: string;
	PreprocessStatus: string;
	StorageLocation: string;
	RegionId: string;
	TranscodeMode: string;
	AuditStatus: string;
	AuditAIStatus: string;
	AuditManualStatus: string;
	AuditAIResult: string;
	AuditTemplateId: string;
	CustomMediaInfo: string;
	AppId: string;
	Snapshots: string[];
	SpriteSnapshots: string[];
	PlayInfoList: PlayInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Image
export interface Image {
	Title: string;
	ImageId: string;
	CateId: number;
	CateName: string;
	Ext: string;
	CreationTime: string;
	ModificationTime: string;
	Tags: string;
	Type: string;
	URL: string;
	Status: string;
	Description: string;
	StorageLocation: string;
	RegionId: string;
	AppId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Category
export interface Category {
	CateName: string;
	Level: number;
	SubTotal: number;
	ParentId: number;
	CateId: number;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.AttachedMediaInSearchMedia
export interface AttachedMediaInSearchMedia {
	Title: string;
	MediaId: string;
	Ext: string;
	CreationTime: string;
	ModificationTime: string;
	Tags: string;
	BusinessType: string;
	URL: string;
	Status: string;
	Description: string;
	StorageLocation: string;
	RegionId: string;
	AppId: string;
	Icon: string;
	OnlineStatus: string;
	Categories: Category[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Media
export interface Media {
	MediaType: string;
	CreationTime: string;
	MediaId: string;
	Video: Video;
	Audio: Audio;
	Image: Image;
	AttachedMedia: AttachedMediaInSearchMedia;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.SearchMediaResponse
export interface SearchMediaResponse {
	RequestId: string;
	ScrollToken: string;
	Total: number;
	MediaList: Media[];
}

