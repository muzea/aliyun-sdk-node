// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiGroupAttribute
export interface ApiGroupAttribute {
	GroupId: string;
	GroupName: string;
	SubDomain: string;
	Description: string;
	CreatedTime: string;
	ModifiedTime: string;
	RegionId: string;
	TrafficLimit: number;
	BillingStatus: string;
	IllegalStatus: string;
	InstanceId: string;
	InstanceType: string;
	HttpsPolicy: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiGroupAttributes
export interface ApiGroupAttributes {
	ApiGroupAttribute: ApiGroupAttribute[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApiGroupsResponse
export interface DescribeApiGroupsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	ApiGroupAttributes: ApiGroupAttributes;
}

