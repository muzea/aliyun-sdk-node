// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.LogEntry
export interface LogEntry {
	Content: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.LogEntrysInDescribeFlowNodeInstanceContainerLog
export interface LogEntrysInDescribeFlowNodeInstanceContainerLog {
	LogEntry: LogEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DescribeFlowNodeInstanceContainerLogResponse
export interface DescribeFlowNodeInstanceContainerLogResponse {
	RequestId: string;
	LogEnd: boolean;
	LogEntrys: LogEntrysInDescribeFlowNodeInstanceContainerLog;
}

