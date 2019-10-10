// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.LockReason
export interface LockReason {
	LockReason: string;
	LockMsg: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.OperationLocksInDescribeEipAddresses
export interface OperationLocksInDescribeEipAddresses {
	LockReason: LockReason[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.EipAddress
export interface EipAddress {
	ExpiredTime: string;
	IpAddress: string;
	EipBandwidth: string;
	ChargeType: string;
	AllocationTime: string;
	InstanceType: string;
	AllocationId: string;
	RegionId: string;
	InstanceId: string;
	Bandwidth: string;
	InternetChargeType: string;
	Status: string;
	OperationLocks: OperationLocksInDescribeEipAddresses;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.EipAddresses
export interface EipAddresses {
	EipAddress: EipAddress[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeEipAddressesResponse
export interface DescribeEipAddressesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	EipAddresses: EipAddresses;
}

