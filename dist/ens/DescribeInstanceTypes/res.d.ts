// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.InstanceType
export interface InstanceType {
	CpuCoreCount: number;
	MemorySize: number;
	InstanceTypeId: string;
	InstanceTypeName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.InstanceTypes
export interface InstanceTypes {
	InstanceType: InstanceType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.DescribeInstanceTypesResponse
export interface DescribeInstanceTypesResponse {
	RequestId: string;
	Code: number;
	InstanceTypes: InstanceTypes;
}

