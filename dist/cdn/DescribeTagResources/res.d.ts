// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.TagItem
export interface TagItem {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.TagResource
export interface TagResource {
	ResourceId: string;
	Tag: TagItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeTagResourcesResponse
export interface DescribeTagResourcesResponse {
	RequestId: string;
	TagResources: TagResource[];
}

