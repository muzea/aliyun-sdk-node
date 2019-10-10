// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.AvailableRegions
export interface AvailableRegions {
	AvailableRegion: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.LockReason
export interface LockReason {
	LockReason: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.OperationLocksInDescribeEipAddresses
export interface OperationLocksInDescribeEipAddresses {
	LockReason: LockReason[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Tag
export interface Tag {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.TagsInDescribeEipAddresses
export interface TagsInDescribeEipAddresses {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.EipAddress
export interface EipAddress {
	RegionId: string;
	IpAddress: string;
	PrivateIpAddress: string;
	AllocationId: string;
	Status: string;
	InstanceId: string;
	Bandwidth: string;
	EipBandwidth: string;
	InternetChargeType: string;
	AllocationTime: string;
	InstanceType: string;
	InstanceRegionId: string;
	ChargeType: string;
	ExpiredTime: string;
	HDMonitorStatus: string;
	Name: string;
	ISP: string;
	Descritpion: string;
	BandwidthPackageId: string;
	BandwidthPackageType: string;
	BandwidthPackageBandwidth: string;
	ResourceGroupId: string;
	HasReservationData: string;
	ReservationBandwidth: string;
	ReservationInternetChargeType: string;
	ReservationActiveTime: string;
	ReservationOrderType: string;
	Mode: string;
	DeletionProtection: boolean;
	SecondLimited: boolean;
	AvailableRegions: AvailableRegions;
	OperationLocks: OperationLocksInDescribeEipAddresses;
	Tags: TagsInDescribeEipAddresses;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.EipAddresses
export interface EipAddresses {
	EipAddress: EipAddress[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeEipAddressesResponse
export interface DescribeEipAddressesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	EipAddresses: EipAddresses;
}

