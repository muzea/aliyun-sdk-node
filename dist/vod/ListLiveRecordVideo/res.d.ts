// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.SnapshotsInListLiveRecordVideo
export interface SnapshotsInListLiveRecordVideo {
	Snapshot: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.VideoInListLiveRecordVideo
export interface VideoInListLiveRecordVideo {
	VideoId: string;
	Title: string;
	Tags: string;
	Status: string;
	Size: number;
	Privilege: number;
	Duration: number;
	Description: string;
	CustomerId: number;
	CreateTime: string;
	CreationTime: string;
	ModifyTime: string;
	CoverURL: string;
	CateId: number;
	CateName: string;
	DownloadSwitch: string;
	TemplateGroupId: string;
	Snapshots: SnapshotsInListLiveRecordVideo;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.PlayInfoInListLiveRecordVideo
export interface PlayInfoInListLiveRecordVideo {
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
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.PlayInfoListInListLiveRecordVideo
export interface PlayInfoListInListLiveRecordVideo {
	PlayInfo: PlayInfoInListLiveRecordVideo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.LiveRecordVideo
export interface LiveRecordVideo {
	StreamName: string;
	DomainName: string;
	AppName: string;
	PlaylistId: string;
	RecordStartTime: string;
	RecordEndTime: string;
	Video: VideoInListLiveRecordVideo;
	PlayInfoList: PlayInfoListInListLiveRecordVideo;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.LiveRecordVideoList
export interface LiveRecordVideoList {
	LiveRecordVideo: LiveRecordVideo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.ListLiveRecordVideoResponse
export interface ListLiveRecordVideoResponse {
	RequestId: string;
	Total: number;
	LiveRecordVideoList: LiveRecordVideoList;
}

