// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.Snapshot
export interface Snapshot {
	SnapshotId: string;
	SnapshotName: string;
	InstanceId: string;
	CreateTime: string;
	Memory: number;
	RdbSize: number;
	Status: string;
	Type: string;
	OssDownloadInPath: string;
	OssDownloadOutPath: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.Snapshots
export interface Snapshots {
	Snapshot: Snapshot[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeSnapshotsResponse
export interface DescribeSnapshotsResponse {
	RequestId: string;
	Snapshots: Snapshots;
}

