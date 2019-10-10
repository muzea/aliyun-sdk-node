// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.GtmInstance
export interface GtmInstance {
	InstanceId: string;
	InstanceName: string;
	Cname: string;
	UserDomainName: string;
	VersionCode: string;
	Ttl: number;
	LbaStrategy: string;
	CreateTime: string;
	CreateTimestamp: number;
	ExpireTime: string;
	ExpireTimestamp: number;
	AlertGroup: string;
	CnameMode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.GtmInstances
export interface GtmInstances {
	GtmInstance: GtmInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeGtmInstancesResponse
export interface DescribeGtmInstancesResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalItems: number;
	TotalPages: number;
	GtmInstances: GtmInstances;
}

