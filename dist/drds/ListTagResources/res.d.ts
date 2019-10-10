// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.TagResource
export interface TagResource {
	TagKey: string;
	TagValue: string;
	ResourceId: string;
	ResourceType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.TagResources
export interface TagResources {
	TagResource: TagResource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ListTagResourcesResponse
export interface ListTagResourcesResponse {
	RequestId: string;
	Success: boolean;
	NextToken: string;
	TagResources: TagResources;
}

