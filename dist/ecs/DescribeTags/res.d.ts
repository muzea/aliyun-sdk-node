// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ResourceTypeCount
export interface ResourceTypeCount {
	Instance: number;
	Disk: number;
	Volume: number;
	Image: number;
	Snapshot: number;
	Securitygroup: number;
	LaunchTemplate: number;
	Eni: number;
	Ddh: number;
	KeyPair: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Tag
export interface Tag {
	TagValue: string;
	TagKey: string;
	ResourceTypeCount: ResourceTypeCount;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.TagsInDescribeTags
export interface TagsInDescribeTags {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeTagsResponse
export interface DescribeTagsResponse {
	RequestId: string;
	PageSize: number;
	PageNumber: number;
	TotalCount: number;
	Tags: TagsInDescribeTags;
}

