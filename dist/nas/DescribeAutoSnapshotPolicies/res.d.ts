// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeAutoSnapshotPoliciesAutoSnapshotPolicy1
export interface DescribeAutoSnapshotPoliciesAutoSnapshotPolicy1 {
	AutoSnapshotPolicyId: string;
	AutoSnapshotPolicyName: string;
	CreateTime: string;
	FileSystemNums: number;
	RegionId: string;
	RepeatWeekdays: string;
	RetentionDays: number;
	Status: string;
	TimePoints: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeAutoSnapshotPoliciesAutoSnapshotPolicies0
export interface DescribeAutoSnapshotPoliciesAutoSnapshotPolicies0 {
	AutoSnapshotPolicy: DescribeAutoSnapshotPoliciesAutoSnapshotPolicy1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeAutoSnapshotPoliciesResponse
export interface DescribeAutoSnapshotPoliciesResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	AutoSnapshotPolicies: DescribeAutoSnapshotPoliciesAutoSnapshotPolicies0;
}

