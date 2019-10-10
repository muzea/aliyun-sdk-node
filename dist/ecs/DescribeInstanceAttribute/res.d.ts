// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SecurityGroupIdsInDescribeInstanceAttribute
export interface SecurityGroupIdsInDescribeInstanceAttribute {
	SecurityGroupId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.PublicIpAddressInDescribeInstanceAttribute
export interface PublicIpAddressInDescribeInstanceAttribute {
	IpAddress: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InnerIpAddressInDescribeInstanceAttribute
export interface InnerIpAddressInDescribeInstanceAttribute {
	IpAddress: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.PrivateIpAddressInDescribeInstanceAttribute
export interface PrivateIpAddressInDescribeInstanceAttribute {
	IpAddress: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.VpcAttributes
export interface VpcAttributes {
	VSwitchId: string;
	VpcId: string;
	NatIpAddress: string;
	PrivateIpAddress: PrivateIpAddressInDescribeInstanceAttribute;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.EipAddressInDescribeInstanceAttribute
export interface EipAddressInDescribeInstanceAttribute {
	AllocationId: string;
	IpAddress: string;
	Bandwidth: number;
	InternetChargeType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DedicatedHostAttribute
export interface DedicatedHostAttribute {
	DedicatedHostName: string;
	DedicatedHostId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.LockReason
export interface LockReason {
	LockReason: string;
	LockMsg: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.OperationLocksInDescribeInstanceAttribute
export interface OperationLocksInDescribeInstanceAttribute {
	LockReason: LockReason[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeInstanceAttributeResponse
export interface DescribeInstanceAttributeResponse {
	RequestId: string;
	InstanceId: string;
	InstanceName: string;
	ImageId: string;
	RegionId: string;
	ZoneId: string;
	ClusterId: string;
	InstanceType: string;
	Cpu: number;
	Memory: number;
	HostName: string;
	Status: string;
	InternetChargeType: string;
	InternetMaxBandwidthIn: number;
	InternetMaxBandwidthOut: number;
	VlanId: string;
	SerialNumber: string;
	CreationTime: string;
	Description: string;
	InstanceNetworkType: string;
	IoOptimized: string;
	InstanceChargeType: string;
	ExpiredTime: string;
	StoppedMode: string;
	CreditSpecification: string;
	SecurityGroupIds: SecurityGroupIdsInDescribeInstanceAttribute;
	PublicIpAddress: PublicIpAddressInDescribeInstanceAttribute;
	InnerIpAddress: InnerIpAddressInDescribeInstanceAttribute;
	VpcAttributes: VpcAttributes;
	EipAddress: EipAddressInDescribeInstanceAttribute;
	DedicatedHostAttribute: DedicatedHostAttribute;
	OperationLocks: OperationLocksInDescribeInstanceAttribute;
}

