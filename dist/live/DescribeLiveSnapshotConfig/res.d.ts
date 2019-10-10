// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveStreamSnapshotConfig
export interface LiveStreamSnapshotConfig {
	DomainName: string;
	AppName: string;
	TimeInterval: number;
	OssEndpoint: string;
	OssBucket: string;
	OverwriteOssObject: string;
	SequenceOssObject: string;
	CreateTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveStreamSnapshotConfigList
export interface LiveStreamSnapshotConfigList {
	LiveStreamSnapshotConfig: LiveStreamSnapshotConfig[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveSnapshotConfigResponse
export interface DescribeLiveSnapshotConfigResponse {
	RequestId: string;
	PageNum: number;
	PageSize: number;
	Order: string;
	TotalNum: number;
	TotalPage: number;
	LiveStreamSnapshotConfigList: LiveStreamSnapshotConfigList;
}

