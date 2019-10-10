// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.Tag
export interface Tag {
	TagValue: string;
	TagKey: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.TagsInDescribeLoadBalancers
export interface TagsInDescribeLoadBalancers {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.LoadBalancer
export interface LoadBalancer {
	LoadBalancerId: string;
	LoadBalancerName: string;
	LoadBalancerStatus: string;
	Address: string;
	AddressType: string;
	RegionId: string;
	RegionIdAlias: string;
	VSwitchId: string;
	VpcId: string;
	NetworkType: string;
	MasterZoneId: string;
	SlaveZoneId: string;
	InternetChargeType: string;
	CreateTime: string;
	CreateTimeStamp: number;
	PayType: string;
	ResourceGroupId: string;
	AddressIPVersion: string;
	Tags: TagsInDescribeLoadBalancers;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.LoadBalancers
export interface LoadBalancers {
	LoadBalancer: LoadBalancer[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeLoadBalancersResponse
export interface DescribeLoadBalancersResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	LoadBalancers: LoadBalancers;
}

