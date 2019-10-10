// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiInfo
export interface ApiInfo {
	ApiId: string;
	RegionId: string;
	BoundTime: string;
	GroupName: string;
	GroupId: string;
	ApiName: string;
	StageName: string;
	Description: string;
	Visibility: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiInfosInDescribeApisByTrafficControl
export interface ApiInfosInDescribeApisByTrafficControl {
	ApiInfo: ApiInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApisByTrafficControlResponse
export interface DescribeApisByTrafficControlResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	ApiInfos: ApiInfosInDescribeApisByTrafficControl;
}

