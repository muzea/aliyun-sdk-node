// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceType
export interface InstanceType {
	MemorySize: number;
	EniPrivateIpAddressQuantity: number;
	InstancePpsRx: number;
	CpuCoreCount: number;
	Cores: number;
	Memory: number;
	InstanceTypeId: string;
	InstanceBandwidthRx: number;
	BaselineCredit: number;
	InstanceType: string;
	EniQuantity: number;
	GPUAmount: number;
	Generation: string;
	SupportIoOptimized: string;
	InstanceTypeFamily: string;
	InitialCredit: number;
	InstancePpsTx: number;
	LocalStorageAmount: number;
	InstanceFamilyLevel: string;
	LocalStorageCapacity: number;
	GPUSpec: string;
	LocalStorageCategory: string;
	InstanceBandwidthTx: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceTypesInDescribeImageSupportInstanceTypes
export interface InstanceTypesInDescribeImageSupportInstanceTypes {
	InstanceType: InstanceType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeImageSupportInstanceTypesResponse
export interface DescribeImageSupportInstanceTypesResponse {
	RequestId: string;
	RegionId: string;
	ImageId: string;
	InstanceTypes: InstanceTypesInDescribeImageSupportInstanceTypes;
}

