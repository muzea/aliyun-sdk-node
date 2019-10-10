// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SpotOptions
export interface SpotOptions {
	InstanceInterruptionBehavior: string;
	InstancePoolsToUseCount: number;
	AllocationStrategy: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.OnDemandOptions
export interface OnDemandOptions {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.LaunchTemplateConfigsInDescribeFleets
export interface LaunchTemplateConfigsInDescribeFleets {
	LaunchTemplateConfig: LaunchTemplateConfig[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Fleet
export interface Fleet {
	FleetId: string;
	FleetName: string;
	FleetType: string;
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
	OnDemandOptions: OnDemandOptions;
	TargetCapacitySpecification: TargetCapacitySpecification;
	launchTemplateConfigs: LaunchTemplateConfigsInDescribeFleets;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Fleets
export interface Fleets {
	Fleet: Fleet[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeFleetsResponse
export interface DescribeFleetsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Fleets: Fleets;
}

