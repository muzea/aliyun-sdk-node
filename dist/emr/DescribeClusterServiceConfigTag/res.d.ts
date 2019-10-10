// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Value
export interface Value {
	Value: string;
	ValueDesc: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ValueListInDescribeClusterServiceConfigTagForAdmin
export interface ValueListInDescribeClusterServiceConfigTagForAdmin {
	Value: Value[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigTag
export interface ConfigTag {
	Tag: string;
	TagDesc: string;
	ValueList: ValueListInDescribeClusterServiceConfigTagForAdmin;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigTagListInDescribeClusterServiceConfigTag
export interface ConfigTagListInDescribeClusterServiceConfigTag {
	ConfigTag: ConfigTag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DescribeClusterServiceConfigTagResponse
export interface DescribeClusterServiceConfigTagResponse {
	RequestId: string;
	ConfigTagList: ConfigTagListInDescribeClusterServiceConfigTag;
}

