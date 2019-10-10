// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveStreamSnapshotInfo
export interface LiveStreamSnapshotInfo {
	OssEndpoint: string;
	OssBucket: string;
	OssObject: string;
	CreateTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveStreamSnapshotInfoList
export interface LiveStreamSnapshotInfoList {
	LiveStreamSnapshotInfo: LiveStreamSnapshotInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveStreamSnapshotInfoResponse
export interface DescribeLiveStreamSnapshotInfoResponse {
	RequestId: string;
	NextStartTime: string;
	LiveStreamSnapshotInfoList: LiveStreamSnapshotInfoList;
}

