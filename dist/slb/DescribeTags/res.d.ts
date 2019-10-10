// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.TagSet
export interface TagSet {
	TagKey: string;
	TagValue: string;
	InstanceCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.TagSets
export interface TagSets {
	TagSet: TagSet[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeTagsResponse
export interface DescribeTagsResponse {
	RequestId: string;
	PageSize: number;
	PageNumber: number;
	TotalCount: number;
	TagSets: TagSets;
}

