// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SpotOptions
export interface SpotOptions {
	InstanceInterruptionBehavior: string;
	InstancePoolsToUseCount: number;
	AllocationStrategy: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.PayAsYouGoOptions
export interface PayAsYouGoOptions {
	AllocationStrategy: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.TargetCapacitySpecification
export interface TargetCapacitySpecification {
	SpotTargetCapacity: number;
	OnDemandTargetCapacity: number;
	FillGapWithOnDemand: boolean;
	PayAsYouGoTargetCapacity: number;
	TotalTargetCapacity: number;
	DefaultTargetCapacityType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.LaunchTemplateConfig
export interface LaunchTemplateConfig {
	VSWitchId: string;
	VSwitchId: string;
	InstanceType: string;
	WeightedCapacity: number;
	MaxPrice: number;
	Priority: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.LaunchTemplateConfigsInDescribeAutoProvisioningGroups
export interface LaunchTemplateConfigsInDescribeAutoProvisioningGroups {
	LaunchTemplateConfig: LaunchTemplateConfig[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AutoProvisioningGroup
export interface AutoProvisioningGroup {
	AutoProvisioningGroupId: string;
	AutoProvisioningGroupName: string;
	AutoProvisioningGroupType: string;
	Status: string;
	State: string;
	RegionId: string;
	ValidFrom: string;
	ValidUntil: string;
	ExcessCapacityTerminationPolicy: string;
	MaxSpotPrice: number;
	LaunchTemplateId: string;
	LaunchTemplateVersion: string;
	TerminateInstances: boolean;
	TerminateInstancesWithExpiration: boolean;
	CreationTime: string;
	SpotOptions: SpotOptions;
	PayAsYouGoOptions: PayAsYouGoOptions;
	TargetCapacitySpecification: TargetCapacitySpecification;
	LaunchTemplateConfigs: LaunchTemplateConfigsInDescribeAutoProvisioningGroups;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AutoProvisioningGroups
export interface AutoProvisioningGroups {
	AutoProvisioningGroup: AutoProvisioningGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeAutoProvisioningGroupsResponse
export interface DescribeAutoProvisioningGroupsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	AutoProvisioningGroups: AutoProvisioningGroups;
}

