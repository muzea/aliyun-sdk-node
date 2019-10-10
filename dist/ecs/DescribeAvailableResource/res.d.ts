// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SupportedResource
export interface SupportedResource {
	Value: string;
	Max: number;
	Unit: string;
	StatusCategory: string;
	Status: string;
	Min: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SupportedResourcesInDescribeAvailableResource
export interface SupportedResourcesInDescribeAvailableResource {
	SupportedResource: SupportedResource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AvailableResource
export interface AvailableResource {
	Type: string;
	SupportedResources: SupportedResourcesInDescribeAvailableResource;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AvailableResourcesInDescribeAvailableResource
export interface AvailableResourcesInDescribeAvailableResource {
	AvailableResource: AvailableResource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AvailableZone
export interface AvailableZone {
	RegionId: string;
	ZoneId: string;
	StatusCategory: string;
	Status: string;
	AvailableResources: AvailableResourcesInDescribeAvailableResource;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AvailableZonesInDescribeAvailableResource
export interface AvailableZonesInDescribeAvailableResource {
	AvailableZone: AvailableZone[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeAvailableResourceResponse
export interface DescribeAvailableResourceResponse {
	RequestId: string;
	AvailableZones: AvailableZonesInDescribeAvailableResource;
}

