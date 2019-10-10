// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.VSwitchIds
export interface VSwitchIds {
	VSwitchId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.RemovalPolicies
export interface RemovalPolicies {
	RemovalPolicy: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.DBInstanceIds
export interface DBInstanceIds {
	DBInstanceId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.LoadBalancerIds
export interface LoadBalancerIds {
	LoadBalancerId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.VServerGroupAttribute
export interface VServerGroupAttribute {
	VServerGroupId: string;
	Port: number;
	Weight: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.VServerGroupAttributes
export interface VServerGroupAttributes {
	VServerGroupAttribute: VServerGroupAttribute[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.VServerGroup
export interface VServerGroup {
	LoadBalancerId: string;
	VServerGroupAttributes: VServerGroupAttributes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.VServerGroups
export interface VServerGroups {
	VServerGroup: VServerGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.ScalingGroup
export interface ScalingGroup {
	DefaultCooldown: number;
	MaxSize: number;
	PendingWaitCapacity: number;
	RemovingWaitCapacity: number;
	PendingCapacity: number;
	RemovingCapacity: number;
	ScalingGroupName: string;
	ActiveCapacity: number;
	StandbyCapacity: number;
	ProtectedCapacity: number;
	ActiveScalingConfigurationId: string;
	LaunchTemplateId: string;
	LaunchTemplateVersion: string;
	ScalingGroupId: string;
	RegionId: string;
	TotalCapacity: number;
	MinSize: number;
	LifecycleState: string;
	CreationTime: string;
	ModificationTime: string;
	VpcId: string;
	VSwitchId: string;
	MultiAZPolicy: string;
	HealthCheckType: string;
	ScalingPolicy: string;
	StoppedCapacity: number;
	OnDemandBaseCapacity: number;
	OnDemandPercentageAboveBaseCapacity: number;
	SpotInstanceRemedy: boolean;
	SpotInstancePools: number;
	VSwitchIds: VSwitchIds;
	RemovalPolicies: RemovalPolicies;
	DBInstanceIds: DBInstanceIds;
	LoadBalancerIds: LoadBalancerIds;
	VServerGroups: VServerGroups;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.ScalingGroups
export interface ScalingGroups {
	ScalingGroup: ScalingGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.DescribeScalingGroupsResponse
export interface DescribeScalingGroupsResponse {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	RequestId: string;
	ScalingGroups: ScalingGroups;
}

