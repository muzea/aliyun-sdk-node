// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.SnapshotsInGetVideoList
export interface SnapshotsInGetVideoList {
	Snapshot: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.VideoInGetVideoList
export interface VideoInGetVideoList {
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
	StorageLocation: string;
	AppId: string;
	Snapshots: SnapshotsInGetVideoList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.VideoListInGetVideoList
export interface VideoListInGetVideoList {
	Video: VideoInGetVideoList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetVideoListResponse
export interface GetVideoListResponse {
	RequestId: string;
	Total: number;
	VideoList: VideoListInGetVideoList;
}

