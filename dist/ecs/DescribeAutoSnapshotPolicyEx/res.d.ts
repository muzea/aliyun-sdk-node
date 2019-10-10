// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AutoSnapshotPolicy
export interface AutoSnapshotPolicy {
	AutoSnapshotPolicyId: string;
	RegionId: string;
	AutoSnapshotPolicyName: string;
	TimePoints: string;
	RepeatWeekdays: string;
	RetentionDays: number;
	DiskNums: number;
	VolumeNums: number;
	CreationTime: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AutoSnapshotPolicies
export interface AutoSnapshotPolicies {
	AutoSnapshotPolicy: AutoSnapshotPolicy[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeAutoSnapshotPolicyExResponse
export interface DescribeAutoSnapshotPolicyExResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	AutoSnapshotPolicies: AutoSnapshotPolicies;
}

