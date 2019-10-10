// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.SnapshotDataInfo
export interface SnapshotDataInfo {
	Date: string;
	Total: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.SnapshotDataInfos
export interface SnapshotDataInfos {
	SnapshotDataInfo: SnapshotDataInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveDomainSnapshotDataResponse
export interface DescribeLiveDomainSnapshotDataResponse {
	RequestId: string;
	SnapshotDataInfos: SnapshotDataInfos;
}

