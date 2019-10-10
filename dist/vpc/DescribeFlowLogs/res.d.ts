// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.FlowLog
export interface FlowLog {
	FlowLogId: string;
	FlowLogName: string;
	Description: string;
	CreationTime: string;
	ResourceType: string;
	ResourceId: string;
	ProjectName: string;
	LogStoreName: string;
	Status: string;
	TrafficType: string;
	RegionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.FlowLogs
export interface FlowLogs {
	FlowLog: FlowLog[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeFlowLogsResponse
export interface DescribeFlowLogsResponse {
	RequestId: string;
	Success: string;
	TotalCount: string;
	PageNumber: string;
	PageSize: string;
	FlowLogs: FlowLogs;
}

