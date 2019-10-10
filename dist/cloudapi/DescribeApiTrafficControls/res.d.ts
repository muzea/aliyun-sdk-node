// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiTrafficControlItem
export interface ApiTrafficControlItem {
	ApiId: string;
	ApiName: string;
	TrafficControlId: string;
	TrafficControlName: string;
	BoundTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiTrafficControls
export interface ApiTrafficControls {
	ApiTrafficControlItem: ApiTrafficControlItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApiTrafficControlsResponse
export interface DescribeApiTrafficControlsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	ApiTrafficControls: ApiTrafficControls;
}

