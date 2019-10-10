// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstanceStorageRange
export interface DBInstanceStorageRange {
	Max: number;
	Min: number;
	Step: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.AvailableResource
export interface AvailableResource {
	StorageRange: string;
	DBInstanceClass: string;
	DBInstanceStorageRange: DBInstanceStorageRange;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.AvailableResourcesInDescribeAvailableResource
export interface AvailableResourcesInDescribeAvailableResource {
	AvailableResource: AvailableResource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SupportedStorageType
export interface SupportedStorageType {
	StorageType: string;
	AvailableResources: AvailableResourcesInDescribeAvailableResource;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SupportedStorageTypesInDescribeAvailableResource
export interface SupportedStorageTypesInDescribeAvailableResource {
	SupportedStorageType: SupportedStorageType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SupportedCategory
export interface SupportedCategory {
	Category: string;
	SupportedStorageTypes: SupportedStorageTypesInDescribeAvailableResource;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SupportedCategorysInDescribeAvailableResource
export interface SupportedCategorysInDescribeAvailableResource {
	SupportedCategory: SupportedCategory[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SupportedEngineVersion
export interface SupportedEngineVersion {
	Version: string;
	SupportedCategorys: SupportedCategorysInDescribeAvailableResource;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SupportedEngineVersionsInDescribeAvailableResource
export interface SupportedEngineVersionsInDescribeAvailableResource {
	SupportedEngineVersion: SupportedEngineVersion[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SupportedEngine
export interface SupportedEngine {
	Engine: string;
	SupportedEngineVersions: SupportedEngineVersionsInDescribeAvailableResource;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SupportedEnginesInDescribeAvailableResource
export interface SupportedEnginesInDescribeAvailableResource {
	SupportedEngine: SupportedEngine[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.AvailableResources
export interface AvailableResources {
	StorageRange: string;
	DBInstanceClass: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SupportedStorageTypes
export interface SupportedStorageTypes {
	StorageType: string;
	AvailableResource: AvailableResources[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SupportedCategorys
export interface SupportedCategorys {
	Category: string;
	SupportedStorageType: SupportedStorageTypes[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SupportedEngineVersions
export interface SupportedEngineVersions {
	Version: string;
	SupportedCategory: SupportedCategorys[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SupportedEngines
export interface SupportedEngines {
	Engine: string;
	SupportedEngineVersion: SupportedEngineVersions[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.AvailableZone
export interface AvailableZone {
	RegionId: string;
	ZoneId: string;
	Status: string;
	NetworkTypes: string;
	SupportedEngines: SupportedEnginesInDescribeAvailableResource;
	SupportedEngine: SupportedEngines[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeAvailableInstanceClassResponse
export interface DescribeAvailableInstanceClassResponse {
	RequestId: string;
	AvailableZones: AvailableZone[];
}

