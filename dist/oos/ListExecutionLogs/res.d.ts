// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/oos.ExecutionLog
export interface ExecutionLog {
	Timestamp: string;
	Message: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/oos.ListExecutionLogsResponse
export interface ListExecutionLogsResponse {
	RequestId: string;
	MaxResults: number;
	NextToken: string;
	ExecutionLogs: ExecutionLog[];
}

