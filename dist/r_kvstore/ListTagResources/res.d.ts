// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.TagResource
export interface TagResource {
	TagKey: string;
	TagValue: string;
	ResourceType: string;
	ResourceId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.TagResources
export interface TagResources {
	TagResource: TagResource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.ListTagResourcesResponse
export interface ListTagResourcesResponse {
	RequestId: string;
	NextToken: string;
	TagResources: TagResources;
}

