// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.TagResource
export interface TagResource {
	ResourceType: string;
	ResourceId: string;
	TagKey: string;
	TagValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.TagResources
export interface TagResources {
	TagResource: TagResource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ListTagResourcesResponse
export interface ListTagResourcesResponse {
	RequestId: string;
	NextToken: string;
	TagResources: TagResources;
}

