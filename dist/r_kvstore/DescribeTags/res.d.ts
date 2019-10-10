// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.TagInDescribeTags
export interface TagInDescribeTags {
	TagKey: string;
	TagValues: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeTagsResponse
export interface DescribeTagsResponse {
	RequestId: string;
	NextToken: string;
	Tags: TagInDescribeTags[];
}

