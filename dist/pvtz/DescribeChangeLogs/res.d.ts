// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.ChangeLog
export interface ChangeLog {
	OperTime: string;
	OperAction: string;
	OperObject: string;
	EntityId: string;
	EntityName: string;
	OperIp: string;
	OperTimestamp: number;
	Id: number;
	Content: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.ChangeLogs
export interface ChangeLogs {
	ChangeLog: ChangeLog[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.DescribeChangeLogsResponse
export interface DescribeChangeLogsResponse {
	RequestId: string;
	TotalItems: number;
	TotalPages: number;
	PageSize: number;
	PageNumber: number;
	ChangeLogs: ChangeLogs;
}

