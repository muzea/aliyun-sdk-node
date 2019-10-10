// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Scenes
export interface Scenes {
	scene: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveSnapshotDetectPornConfig
export interface LiveSnapshotDetectPornConfig {
	DomainName: string;
	AppName: string;
	OssEndpoint: string;
	OssBucket: string;
	OssObject: string;
	Interval: number;
	Scenes: Scenes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveSnapshotDetectPornConfigList
export interface LiveSnapshotDetectPornConfigList {
	LiveSnapshotDetectPornConfig: LiveSnapshotDetectPornConfig[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveSnapshotDetectPornConfigResponse
export interface DescribeLiveSnapshotDetectPornConfigResponse {
	RequestId: string;
	PageNum: number;
	PageSize: number;
	Order: string;
	TotalNum: number;
	TotalPage: number;
	LiveSnapshotDetectPornConfigList: LiveSnapshotDetectPornConfigList;
}

