// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.ServiceAreas
export interface ServiceAreas {
	ServiceArea: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.App
export interface App {
	Status: number;
	AppId: string;
	AppName: string;
	CreateTime: string;
	AppType: string;
	BillType: string;
	ServiceAreas: ServiceAreas;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.AppList
export interface AppList {
	App: App[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DescribeAppsResponse
export interface DescribeAppsResponse {
	RequestId: string;
	TotalNum: number;
	TotalPage: number;
	AppList: AppList;
}

