// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Resource
export interface Resource {
	ResourceId: string;
	ResourceType: string;
	RegionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Resources
export interface Resources {
	Resource: Resource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeResourceByTagsResponse
export interface DescribeResourceByTagsResponse {
	RequestId: string;
	PageSize: number;
	PageNumber: number;
	TotalCount: number;
	Resources: Resources;
}

