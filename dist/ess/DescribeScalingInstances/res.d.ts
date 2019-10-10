// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.ScalingInstance
export interface ScalingInstance {
	InstanceId: string;
	ScalingConfigurationId: string;
	ScalingGroupId: string;
	HealthStatus: string;
	LoadBalancerWeight: number;
	LifecycleState: string;
	CreationTime: string;
	CreationType: string;
	LaunchTemplateId: string;
	LaunchTemplateVersion: string;
	WarmupState: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.ScalingInstances
export interface ScalingInstances {
	ScalingInstance: ScalingInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.DescribeScalingInstancesResponse
export interface DescribeScalingInstancesResponse {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	RequestId: string;
	ScalingInstances: ScalingInstances;
}

