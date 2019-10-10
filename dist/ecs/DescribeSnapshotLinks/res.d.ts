// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SnapshotLink
export interface SnapshotLink {
	SnapshotLinkId: string;
	RegionId: string;
	InstanceId: string;
	InstanceName: string;
	SourceDiskId: string;
	SourceDiskName: string;
	SourceDiskSize: number;
	SourceDiskType: string;
	TotalSize: number;
	TotalCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SnapshotLinks
export interface SnapshotLinks {
	SnapshotLink: SnapshotLink[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeSnapshotLinksResponse
export interface DescribeSnapshotLinksResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	SnapshotLinks: SnapshotLinks;
}

