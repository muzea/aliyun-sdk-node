// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/arms.TraceApp
export interface TraceApp {
	AppId: number;
	RegionId: string;
	UpdateTime: number;
	Pid: string;
	UserId: string;
	CreateTime: number;
	AppName: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/arms.ListTraceAppsResponse
export interface ListTraceAppsResponse {
	RequestId: string;
	Success: boolean;
	Code: number;
	Message: string;
	TraceApps: TraceApp[];
}

