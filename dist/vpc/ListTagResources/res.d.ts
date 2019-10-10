// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.TagResource
export interface TagResource {
	TagKey: string;
	TagValue: string;
	ResourcId: string;
	ResourceType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.TagResources
export interface TagResources {
	TagResource: TagResource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.ListTagResourcesResponse
export interface ListTagResourcesResponse {
	RequestId: string;
	NextToken: string;
	TagResources: TagResources;
}

