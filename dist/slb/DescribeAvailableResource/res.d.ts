// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.SupportResource
export interface SupportResource {
	AddressType: string;
	AddressIPVersion: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.SupportResources
export interface SupportResources {
	SupportResource: SupportResource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.AvailableResource
export interface AvailableResource {
	MasterZoneId: string;
	SlaveZoneId: string;
	SupportResources: SupportResources;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.AvailableResources
export interface AvailableResources {
	AvailableResource: AvailableResource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeAvailableResourceResponse
export interface DescribeAvailableResourceResponse {
	RequestId: string;
	AvailableResources: AvailableResources;
}

