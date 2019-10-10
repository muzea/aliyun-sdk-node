// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiSummary
export interface ApiSummary {
	RegionId: string;
	GroupId: string;
	GroupName: string;
	ApiId: string;
	ApiName: string;
	Visibility: string;
	Description: string;
	CreatedTime: string;
	ModifiedTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiSummarys
export interface ApiSummarys {
	ApiSummary: ApiSummary[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApisResponse
export interface DescribeApisResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	ApiSummarys: ApiSummarys;
}

