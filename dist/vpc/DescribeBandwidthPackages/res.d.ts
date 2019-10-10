// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.PublicIpAddresse
export interface PublicIpAddresse {
	IpAddress: string;
	ApAccessEnabled: boolean;
	AllocationId: string;
	UsingStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.PublicIpAddressesInDescribeBandwidthPackages
export interface PublicIpAddressesInDescribeBandwidthPackages {
	PublicIpAddresse: PublicIpAddresse[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.BandwidthPackage
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
	CreationTime: string;
	Status: string;
	ISP: string;
	PublicIpAddresses: PublicIpAddressesInDescribeBandwidthPackages;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.BandwidthPackages
export interface BandwidthPackages {
	BandwidthPackage: BandwidthPackage[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeBandwidthPackagesResponse
export interface DescribeBandwidthPackagesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	BandwidthPackages: BandwidthPackages;
}

