// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.AssociatedInstances
export interface AssociatedInstances {
	associatedInstance: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.AssociatedEipAddresses
export interface AssociatedEipAddresses {
	associatedEipAddresse: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.HaVip
export interface HaVip {
	HaVipId: string;
	RegionId: string;
	VpcId: string;
	VSwitchId: string;
	IpAddress: string;
	Status: string;
	MasterInstanceId: string;
	Description: string;
	Name: string;
	ChargeType: string;
	CreateTime: string;
	AssociatedInstances: AssociatedInstances;
	AssociatedEipAddresses: AssociatedEipAddresses;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.HaVips
export interface HaVips {
	HaVip: HaVip[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeHaVipsResponse
export interface DescribeHaVipsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	HaVips: HaVips;
}

