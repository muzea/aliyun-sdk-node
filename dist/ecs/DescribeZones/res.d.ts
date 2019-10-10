// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AvailableResourceCreation
export interface AvailableResourceCreation {
	ResourceTypes: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AvailableVolumeCategories
export interface AvailableVolumeCategories {
	VolumeCategories: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AvailableInstanceTypes
export interface AvailableInstanceTypes {
	InstanceTypes: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AvailableDedicatedHostTypes
export interface AvailableDedicatedHostTypes {
	DedicatedHostType: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.NetworkTypesInDescribeRecommendInstanceType
export interface NetworkTypesInDescribeRecommendInstanceType {
	NetworkType: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AvailableDiskCategories
export interface AvailableDiskCategories {
	DiskCategories: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DedicatedHostGenerations
export interface DedicatedHostGenerations {
	DedicatedHostGeneration: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SystemDiskCategories
export interface SystemDiskCategories {
	supportedSystemDiskCategory: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DataDiskCategories
export interface DataDiskCategories {
	supportedDataDiskCategory: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.NetworkTypesInDescribeZones
export interface NetworkTypesInDescribeZones {
	supportedNetworkCategory: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceTypesInDescribeZones
export interface InstanceTypesInDescribeZones {
	supportedInstanceType: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceTypeFamiliesInDescribeZones
export interface InstanceTypeFamiliesInDescribeZones {
	supportedInstanceTypeFamily: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceGenerations
export interface InstanceGenerations {
	supportedInstanceGeneration: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ResourcesInfo
export interface ResourcesInfo {
	IoOptimized: boolean;
	SystemDiskCategories: SystemDiskCategories;
	DataDiskCategories: DataDiskCategories;
	NetworkTypes: NetworkTypesInDescribeZones;
	InstanceTypes: InstanceTypesInDescribeZones;
	InstanceTypeFamilies: InstanceTypeFamiliesInDescribeZones;
	InstanceGenerations: InstanceGenerations;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AvailableResourcesInDescribeZones
export interface AvailableResourcesInDescribeZones {
	ResourcesInfo: ResourcesInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Zone
export interface Zone {
	ZoneNo: string;
	ZoneId: string;
	LocalName: string;
	AvailableResourceCreation: AvailableResourceCreation;
	AvailableVolumeCategories: AvailableVolumeCategories;
	AvailableInstanceTypes: AvailableInstanceTypes;
	AvailableDedicatedHostTypes: AvailableDedicatedHostTypes;
	NetworkTypes: NetworkTypesInDescribeRecommendInstanceType;
	AvailableDiskCategories: AvailableDiskCategories;
	DedicatedHostGenerations: DedicatedHostGenerations;
	AvailableResources: AvailableResourcesInDescribeZones;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ZonesInDescribeZones
export interface ZonesInDescribeZones {
	Zone: Zone[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeZonesResponse
export interface DescribeZonesResponse {
	RequestId: string;
	Zones: ZonesInDescribeZones;
}

