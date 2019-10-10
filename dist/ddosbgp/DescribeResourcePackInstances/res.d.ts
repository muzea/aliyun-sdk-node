// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.ResourcePack
export interface ResourcePack {
	ResourcePackId: string;
	InitCapacity: number;
	CurrCapacity: number;
	StartTime: number;
	EndTime: number;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.DescribeResourcePackInstancesResponse
export interface DescribeResourcePackInstancesResponse {
	RequestId: string;
	TotalCount: number;
	ResourcePacks: ResourcePack[];
}

