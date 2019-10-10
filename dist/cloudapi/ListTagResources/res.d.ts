// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.TagResource
export interface TagResource {
	ResourceId: string;
	ResourceType: string;
	TagKey: string;
	TagValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.TagResources
export interface TagResources {
	TagResource: TagResource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ListTagResourcesResponse
export interface ListTagResourcesResponse {
	NextToken: string;
	RequestId: string;
	TagResources: TagResources;
}

