// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeTagsFileSystemIds2
export interface DescribeTagsFileSystemIds2 {
	FileSystemId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeTagsTag1
export interface DescribeTagsTag1 {
	Key: string;
	Value: string;
	FileSystemIds: DescribeTagsFileSystemIds2;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeTagsTags0
export interface DescribeTagsTags0 {
	Tag: DescribeTagsTag1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeTagsResponse
export interface DescribeTagsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	Tags: DescribeTagsTags0;
}

