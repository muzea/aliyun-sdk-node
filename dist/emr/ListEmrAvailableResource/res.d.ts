// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SupportNodeTypeList
export interface SupportNodeTypeList {
	SupportNodeType: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EmrInstanceType
export interface EmrInstanceType {
	InstanceType: string;
	CpuCoreCount: number;
	MemorySize: number;
	InstanceTypeFamily: string;
	LocalStorageCapacity: number;
	LocalStorageAmount: number;
	LocalStorageCategory: string;
	GPUAmount: number;
	GPUSpec: string;
	InitialCredit: number;
	BaselineCredit: number;
	EniQuantity: number;
	InstanceBandwidthRx: number;
	InstanceBandwidthTx: number;
	InstancePpsRx: number;
	InstancePpsTx: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SupportedResource
export interface SupportedResource {
	Value: string;
	Min: number;
	Max: number;
	Unit: string;
	SupportNodeTypeList: SupportNodeTypeList;
	EmrInstanceType: EmrInstanceType;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SupportedResourceList
export interface SupportedResourceList {
	SupportedResource: SupportedResource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EmrResourceInfo
export interface EmrResourceInfo {
	Type: string;
	SupportedResourceList: SupportedResourceList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EmrResourceInfoList
export interface EmrResourceInfoList {
	EmrResourceInfo: EmrResourceInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EmrZoneInfo
export interface EmrZoneInfo {
	ZoneId: string;
	EmrResourceInfoList: EmrResourceInfoList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EmrZoneInfoList
export interface EmrZoneInfoList {
	EmrZoneInfo: EmrZoneInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListEmrAvailableResourceResponse
export interface ListEmrAvailableResourceResponse {
	RequestId: string;
	RegionId: string;
	EmrZoneInfoList: EmrZoneInfoList;
}

