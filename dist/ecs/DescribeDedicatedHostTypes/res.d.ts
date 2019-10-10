// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SupportedInstanceTypeFamiliesInDescribeDedicatedHostTypes
export interface SupportedInstanceTypeFamiliesInDescribeDedicatedHostTypes {
	SupportedInstanceTypeFamily: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SupportedInstanceTypesListInDescribeDedicatedHostTypes
export interface SupportedInstanceTypesListInDescribeDedicatedHostTypes {
	SupportedInstanceTypesList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DedicatedHostType
export interface DedicatedHostType {
	DedicatedHostType: string;
	Sockets: number;
	TotalVcpus: number;
	TotalVgpus: number;
	Cores: number;
	PhysicalGpus: number;
	MemorySize: number;
	LocalStorageCapacity: number;
	LocalStorageAmount: number;
	LocalStorageCategory: string;
	GPUSpec: string;
	SupportedInstanceTypeFamilies: SupportedInstanceTypeFamiliesInDescribeDedicatedHostTypes;
	SupportedInstanceTypesList: SupportedInstanceTypesListInDescribeDedicatedHostTypes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DedicatedHostTypes
export interface DedicatedHostTypes {
	DedicatedHostType: DedicatedHostType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeDedicatedHostTypesResponse
export interface DescribeDedicatedHostTypesResponse {
	RequestId: string;
	DedicatedHostTypes: DedicatedHostTypes;
}

