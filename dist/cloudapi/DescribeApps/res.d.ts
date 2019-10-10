// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.AppItem
export interface AppItem {
	AppId: number;
	AppName: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.AppsInDescribeApps
export interface AppsInDescribeApps {
	AppItem: AppItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeAppsResponse
export interface DescribeAppsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	Apps: AppsInDescribeApps;
}

