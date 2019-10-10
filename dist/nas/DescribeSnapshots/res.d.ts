// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeSnapshotsSnapshot1
export interface DescribeSnapshotsSnapshot1 {
	CreateTime: string;
	Description: string;
	Progress: string;
	RemainTime: number;
	RetentionDays: number;
	SnapshotId: string;
	SnapshotName: string;
	SourceFileSystemId: string;
	SourceFileSystemSize: number;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeSnapshotsSnapshots0
export interface DescribeSnapshotsSnapshots0 {
	Snapshot: DescribeSnapshotsSnapshot1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeSnapshotsResponse
export interface DescribeSnapshotsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	Snapshots: DescribeSnapshotsSnapshots0;
}

