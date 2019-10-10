// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.RecordLog
export interface RecordLog {
	ActionTime: string;
	ActionTimestamp: number;
	Action: string;
	Message: string;
	ClientIp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.RecordLogs
export interface RecordLogs {
	RecordLog: RecordLog[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeRecordLogsResponse
export interface DescribeRecordLogsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	RecordLogs: RecordLogs;
}

