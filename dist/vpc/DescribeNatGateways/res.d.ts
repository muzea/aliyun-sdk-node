// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.ForwardTableIdsInDescribeNatGateways
export interface ForwardTableIdsInDescribeNatGateways {
	ForwardTableId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.SnatTableIdsInDescribeNatGateways
export interface SnatTableIdsInDescribeNatGateways {
	SnatTableId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.BandwidthPackageIdsInDescribeNatGateways
export interface BandwidthPackageIdsInDescribeNatGateways {
	BandwidthPackageId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.IpList
export interface IpList {
	AllocationId: string;
	IpAddress: string;
	UsingStatus: string;
	ApAccessEnabled: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.IpLists
export interface IpLists {
	IpList: IpList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.NatGateway
export interface NatGateway {
	NatGatewayId: string;
	RegionId: string;
	Name: string;
	Description: string;
	VpcId: string;
	Spec: string;
	InstanceChargeType: string;
	ExpiredTime: string;
	AutoPay: boolean;
	BusinessStatus: string;
	CreationTime: string;
	Status: string;
	DeletionProtection: boolean;
	ForwardTableIds: ForwardTableIdsInDescribeNatGateways;
	SnatTableIds: SnatTableIdsInDescribeNatGateways;
	BandwidthPackageIds: BandwidthPackageIdsInDescribeNatGateways;
	IpLists: IpLists;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.NatGateways
export interface NatGateways {
	NatGateway: NatGateway[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeNatGatewaysResponse
export interface DescribeNatGatewaysResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	NatGateways: NatGateways;
}

