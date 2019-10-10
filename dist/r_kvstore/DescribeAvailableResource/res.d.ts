// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.AvailableResource
export interface AvailableResource {
	InstanceClass: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.AvailableResources
export interface AvailableResources {
	AvailableResource: AvailableResource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SupportedPackageType
export interface SupportedPackageType {
	PackageType: string;
	AvailableResources: AvailableResources;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SupportedPackageTypes
export interface SupportedPackageTypes {
	SupportedPackageType: SupportedPackageType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SupportedNodeType
export interface SupportedNodeType {
	NodeType: string;
	SupportedPackageTypes: SupportedPackageTypes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SupportedNodeTypes
export interface SupportedNodeTypes {
	SupportedNodeType: SupportedNodeType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SupportedStorageType
export interface SupportedStorageType {
	StorageType: string;
	SupportedNodeTypes: SupportedNodeTypes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SupportedStorageTypes
export interface SupportedStorageTypes {
	SupportedStorageType: SupportedStorageType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SupportedPerformanceType
export interface SupportedPerformanceType {
	PerformanceType: string;
	SupportedStorageTypes: SupportedStorageTypes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SupportedPerformanceTypes
export interface SupportedPerformanceTypes {
	SupportedPerformanceType: SupportedPerformanceType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SupportedArchitectureType
export interface SupportedArchitectureType {
	Architecture: string;
	SupportedPerformanceTypes: SupportedPerformanceTypes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SupportedArchitectureTypes
export interface SupportedArchitectureTypes {
	SupportedArchitectureType: SupportedArchitectureType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SupportedEngineVersion
export interface SupportedEngineVersion {
	Version: string;
	SupportedArchitectureTypes: SupportedArchitectureTypes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SupportedEngineVersions
export interface SupportedEngineVersions {
	SupportedEngineVersion: SupportedEngineVersion[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SupportedEngine
export interface SupportedEngine {
	Engine: string;
	SupportedEngineVersions: SupportedEngineVersions;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SupportedEngines
export interface SupportedEngines {
	SupportedEngine: SupportedEngine[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.AvailableZone
export interface AvailableZone {
	RegionId: string;
	ZoneId: string;
	Status: string;
	NetworkTypes: string;
	SupportedEngines: SupportedEngines;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.AvailableZones
export interface AvailableZones {
	AvailableZone: AvailableZone[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeAvailableResourceResponse
export interface DescribeAvailableResourceResponse {
	RequestId: string;
	AvailableZones: AvailableZones;
}

