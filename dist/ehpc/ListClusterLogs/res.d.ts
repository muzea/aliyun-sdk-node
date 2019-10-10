// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.LogInfo
export interface LogInfo {
	Operation: string;
	Level: string;
	Message: string;
	CreateTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Logs
export interface Logs {
	LogInfo: LogInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListClusterLogsResponse
export interface ListClusterLogsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	ClusterId: string;
	Logs: Logs;
}

