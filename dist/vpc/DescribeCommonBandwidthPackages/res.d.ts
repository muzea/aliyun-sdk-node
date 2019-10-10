// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.PublicIpAddresse
export interface PublicIpAddresse {
	IpAddress: string;
	ApAccessEnabled: boolean;
	AllocationId: string;
	UsingStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.PublicIpAddressesInDescribeCommonBandwidthPackages
export interface PublicIpAddressesInDescribeCommonBandwidthPackages {
	PublicIpAddresse: PublicIpAddresse[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.CommonBandwidthPackage
export interface CommonBandwidthPackage {
	BandwidthPackageId: string;
	RegionId: string;
	Name: string;
	Description: string;
	Bandwidth: string;
	InstanceChargeType: string;
	InternetChargeType: string;
	BusinessStatus: string;
	CreationTime: string;
	ExpiredTime: string;
	Status: string;
	Ratio: number;
	ResourceGroupId: string;
	HasReservationData: string;
	ReservationBandwidth: string;
	ReservationInternetChargeType: string;
	ReservationActiveTime: string;
	ReservationOrderType: string;
	ISP: string;
	DeletionProtection: boolean;
	PublicIpAddresses: PublicIpAddressesInDescribeCommonBandwidthPackages;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.CommonBandwidthPackages
export interface CommonBandwidthPackages {
	CommonBandwidthPackage: CommonBandwidthPackage[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeCommonBandwidthPackagesResponse
export interface DescribeCommonBandwidthPackagesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	CommonBandwidthPackages: CommonBandwidthPackages;
}

