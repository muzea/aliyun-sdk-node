// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Link
export interface Link {
	InstanceId: string;
	VpcId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Links
export interface Links {
	Link: Link[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeClassicLinkInstancesResponse
export interface DescribeClassicLinkInstancesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Links: Links;
}

