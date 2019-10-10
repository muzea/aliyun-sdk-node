// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ForwardTableIdsInDescribeNatGateways
export interface ForwardTableIdsInDescribeNatGateways {
	ForwardTableId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.BandwidthPackageIdsInDescribeNatGateways
export interface BandwidthPackageIdsInDescribeNatGateways {
	BandwidthPackageId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.NatGateway
export interface NatGateway {
	NatGatewayId: string;
	RegionId: string;
	Name: string;
	Description: string;
	VpcId: string;
	Spec: string;
	InstanceChargeType: string;
	BusinessStatus: string;
	CreationTime: string;
	Status: string;
	ForwardTableIds: ForwardTableIdsInDescribeNatGateways;
	BandwidthPackageIds: BandwidthPackageIdsInDescribeNatGateways;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.NatGateways
export interface NatGateways {
	NatGateway: NatGateway[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeNatGatewaysResponse
export interface DescribeNatGatewaysResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	NatGateways: NatGateways;
}

