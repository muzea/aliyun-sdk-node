// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AssociatedInstances
export interface AssociatedInstances {
	associatedInstance: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AssociatedEipAddresses
export interface AssociatedEipAddresses {
	associatedEipAddresse: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.HaVip
export interface HaVip {
	HaVipId: string;
	RegionId: string;
	VpcId: string;
	VSwitchId: string;
	IpAddress: string;
	Status: string;
	MasterInstanceId: string;
	Description: string;
	CreateTime: string;
	AssociatedInstances: AssociatedInstances;
	AssociatedEipAddresses: AssociatedEipAddresses;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.HaVips
export interface HaVips {
	HaVip: HaVip[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeHaVipsResponse
export interface DescribeHaVipsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	HaVips: HaVips;
}

