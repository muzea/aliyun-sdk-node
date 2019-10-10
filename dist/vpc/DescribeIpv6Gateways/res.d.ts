// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Ipv6Gateway
export interface Ipv6Gateway {
	RegionId: string;
	Ipv6GatewayId: string;
	VpcId: string;
	Status: string;
	Name: string;
	Description: string;
	Spec: string;
	InstanceChargeType: string;
	BusinessStatus: string;
	ExpiredTime: string;
	CreationTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Ipv6Gateways
export interface Ipv6Gateways {
	Ipv6Gateway: Ipv6Gateway[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeIpv6GatewaysResponse
export interface DescribeIpv6GatewaysResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Ipv6Gateways: Ipv6Gateways;
}

