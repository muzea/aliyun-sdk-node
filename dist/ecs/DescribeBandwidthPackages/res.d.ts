// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.PublicIpAddresse
export interface PublicIpAddresse {
	AllocationId: string;
	IpAddress: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.PublicIpAddresses
export interface PublicIpAddresses {
	PublicIpAddresse: PublicIpAddresse[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.BandwidthPackage
export interface BandwidthPackage {
	BandwidthPackageId: string;
	RegionId: string;
	Name: string;
	Description: string;
	ZoneId: string;
	NatGatewayId: string;
	Bandwidth: string;
	InstanceChargeType: string;
	InternetChargeType: string;
	BusinessStatus: string;
	IpCount: string;
	ISP: string;
	CreationTime: string;
	Status: string;
	PublicIpAddresses: PublicIpAddresses;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.BandwidthPackages
export interface BandwidthPackages {
	BandwidthPackage: BandwidthPackage[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeBandwidthPackagesResponse
export interface DescribeBandwidthPackagesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	BandwidthPackages: BandwidthPackages;
}

