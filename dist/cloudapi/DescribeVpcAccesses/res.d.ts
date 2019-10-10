// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.VpcAccessAttribute
export interface VpcAccessAttribute {
	VpcId: string;
	InstanceId: string;
	CreatedTime: string;
	Port: number;
	RegionId: string;
	Name: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.VpcAccessAttributes
export interface VpcAccessAttributes {
	VpcAccessAttribute: VpcAccessAttribute[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeVpcAccessesResponse
export interface DescribeVpcAccessesResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	VpcAccessAttributes: VpcAccessAttributes;
}

