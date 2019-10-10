// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.TypesInfo
export interface TypesInfo {
	CpuCoreCount: number;
	MemorySize: number;
	GPUAmount: number;
	InstanceBandwidthRx: number;
	InstancePpsRx: number;
	InstancePpsTx: number;
	EniQuantity: number;
	InstanceBandwidthTx: number;
	InstanceTypeId: string;
	GPUSpec: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Types
export interface Types {
	TypesInfo: TypesInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.InstanceTypeFamilyInfo
export interface InstanceTypeFamilyInfo {
	InstanceTypeFamilyId: string;
	Generation: string;
	Types: Types;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.InstanceTypeFamilies
export interface InstanceTypeFamilies {
	InstanceTypeFamilyInfo: InstanceTypeFamilyInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListAvailableEcsTypesResponse
export interface ListAvailableEcsTypesResponse {
	RequestId: string;
	SupportSpotInstance: boolean;
	InstanceTypeFamilies: InstanceTypeFamilies;
}

