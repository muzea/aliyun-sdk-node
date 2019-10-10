// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Ipv6InternetBandwidth
export interface Ipv6InternetBandwidth {
	Bandwidth: number;
	InstanceChargeType: string;
	InternetChargeType: string;
	BusinessStatus: string;
	Ipv6InternetBandwidthId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Ipv6Address
export interface Ipv6Address {
	Ipv6AddressId: string;
	Ipv6AddressName: string;
	VSwitchId: string;
	VpcId: string;
	Ipv6GatewayId: string;
	Ipv6Address: string;
	AssociatedInstanceId: string;
	AssociatedInstanceType: string;
	Status: string;
	NetworkType: string;
	RealBandwidth: number;
	AllocationTime: string;
	Ipv6InternetBandwidth: Ipv6InternetBandwidth;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Ipv6Addresses
export interface Ipv6Addresses {
	Ipv6Address: Ipv6Address[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeIpv6AddressesResponse
export interface DescribeIpv6AddressesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Ipv6Addresses: Ipv6Addresses;
}

