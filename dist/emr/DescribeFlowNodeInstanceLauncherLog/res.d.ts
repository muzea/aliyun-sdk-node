// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.LogEntry
export interface LogEntry {
	Content: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.LogEntrysInDescribeFlowNodeInstanceLauncherLog
export interface LogEntrysInDescribeFlowNodeInstanceLauncherLog {
	LogEntry: LogEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DescribeFlowNodeInstanceLauncherLogResponse
export interface DescribeFlowNodeInstanceLauncherLogResponse {
	RequestId: string;
	LogEnd: boolean;
	LogEntrys: LogEntrysInDescribeFlowNodeInstanceLauncherLog;
}

