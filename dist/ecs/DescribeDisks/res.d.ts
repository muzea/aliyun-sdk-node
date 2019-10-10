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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.TagsInDescribeDisks
export interface TagsInDescribeDisks {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.MountInstance
export interface MountInstance {
	InstanceId: string;
	Device: string;
	AttachedTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.MountInstances
export interface MountInstances {
	MountInstance: MountInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.OperationLock
export interface OperationLock {
	LockReason: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.OperationLocksInDescribeDisks
export interface OperationLocksInDescribeDisks {
	OperationLock: OperationLock[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Disk
export interface Disk {
	Category: string;
	BdfId: string;
	ImageId: string;
	AutoSnapshotPolicyId: string;
	DeleteAutoSnapshot: boolean;
	EnableAutomatedSnapshotPolicy: boolean;
	DiskId: string;
	Size: number;
	IOPS: number;
	RegionId: string;
	MountInstanceNum: number;
	ResourceGroupId: string;
	StorageSetId: string;
	InstanceId: string;
	Description: string;
	Type: string;
	ExpiredTime: string;
	Device: string;
	CreationTime: string;
	IOPSRead: number;
	SourceSnapshotId: string;
	StorageSetPartitionNumber: number;
	ProductCode: string;
	Portable: boolean;
	KMSKeyId: string;
	Encrypted: boolean;
	EnableAutoSnapshot: boolean;
	DetachedTime: string;
	DeleteWithInstance: boolean;
	ZoneId: string;
	DiskChargeType: string;
	PerformanceLevel: string;
	DiskName: string;
	Status: string;
	AttachedTime: string;
	IOPSWrite: number;
	Tags: TagsInDescribeDisks;
	MountInstances: MountInstances;
	OperationLocks: OperationLocksInDescribeDisks;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DisksInDescribeDisks
export interface DisksInDescribeDisks {
	Disk: Disk[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeDisksResponse
export interface DescribeDisksResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Disks: DisksInDescribeDisks;
}

