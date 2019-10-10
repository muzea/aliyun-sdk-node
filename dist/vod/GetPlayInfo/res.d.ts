// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Thumbnail
export interface Thumbnail {
	URL: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.ThumbnailListInGetPlayInfo
export interface ThumbnailListInGetPlayInfo {
	Thumbnail: Thumbnail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.VideoBase
export interface VideoBase {
	OutputType: string;
	CoverURL: string;
	Duration: string;
	Status: string;
	Title: string;
	VideoId: string;
	MediaType: string;
	CreationTime: string;
	TranscodeMode: string;
	ThumbnailList: ThumbnailListInGetPlayInfo;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.PlayInfoInGetPlayInfo
export interface PlayInfoInGetPlayInfo {
	Width: number;
	Height: number;
	Size: number;
	PlayURL: string;
	Bitrate: string;
	Definition: string;
	Duration: string;
	Format: string;
	Fps: string;
	Encrypt: number;
	Plaintext: string;
	Complexity: string;
	StreamType: string;
	Rand: string;
	JobId: string;
	PreprocessStatus: string;
	WatermarkId: string;
	Status: string;
	CreationTime: string;
	ModificationTime: string;
	EncryptType: string;
	NarrowBandType: string;
	Specification: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.PlayInfoListInGetPlayInfo
export interface PlayInfoListInGetPlayInfo {
	PlayInfo: PlayInfoInGetPlayInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetPlayInfoResponse
export interface GetPlayInfoResponse {
	RequestId: string;
	VideoBase: VideoBase;
	PlayInfoList: PlayInfoListInGetPlayInfo;
}

