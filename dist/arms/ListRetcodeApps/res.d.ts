// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/arms.RetcodeApp
export interface RetcodeApp {
	AppId: number;
	RegionId: string;
	UpdateTime: number;
	Pid: string;
	UserId: string;
	CreateTime: number;
	AppName: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/arms.ListRetcodeAppsResponse
export interface ListRetcodeAppsResponse {
	RequestId: string;
	RetcodeApps: RetcodeApp[];
}

