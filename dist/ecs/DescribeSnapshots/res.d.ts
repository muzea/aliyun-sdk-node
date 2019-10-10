// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ResourceTypeCount
export interface ResourceTypeCount {
	Instance: number;
	Disk: number;
	Volume: number;
	Image: number;
	Snapshot: number;
	Securitygroup: number;
	LaunchTemplate: number;
	Eni: number;
	Ddh: number;
	KeyPair: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Tag
export interface Tag {
	TagValue: string;
	TagKey: string;
	ResourceTypeCount: ResourceTypeCount;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.TagsInDescribeSnapshots
export interface TagsInDescribeSnapshots {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Snapshot
export interface Snapshot {
	SnapshotId: string;
	SnapshotName: string;
	Progress: string;
	ProductCode: string;
	SourceDiskId: string;
	SourceDiskType: string;
	RetentionDays: number;
	Encrypted: boolean;
	SourceDiskSize: string;
	Description: string;
	CreationTime: string;
	LastModifiedTime: string;
	Status: string;
	Usage: string;
	SourceStorageType: string;
	RemainTime: number;
	ResourceGroupId: string;
	KMSKeyId: string;
	Tags: TagsInDescribeSnapshots;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Snapshots
export interface Snapshots {
	Snapshot: Snapshot[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeSnapshotsResponse
export interface DescribeSnapshotsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Snapshots: Snapshots;
}

