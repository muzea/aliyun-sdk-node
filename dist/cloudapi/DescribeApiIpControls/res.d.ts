// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiIpControlItem
export interface ApiIpControlItem {
	ApiId: string;
	ApiName: string;
	IpControlId: string;
	IpControlName: string;
	BoundTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiIpControls
export interface ApiIpControls {
	ApiIpControlItem: ApiIpControlItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApiIpControlsResponse
export interface DescribeApiIpControlsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	ApiIpControls: ApiIpControls;
}

