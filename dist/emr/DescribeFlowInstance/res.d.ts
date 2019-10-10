// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ParentFlow
export interface ParentFlow {
	BizDate: number;
	FlowId: string;
	ScheduleKey: string;
	ParentFlowId: string;
	ProjectName: string;
	ProjectId: string;
	DependencyFlowId: string;
	FlowInstanceId: string;
	DependencyInstanceId: string;
	ParentFlowName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DependencyFlowList
export interface DependencyFlowList {
	ParentFlow: ParentFlow[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.NodeInstanceItem
export interface NodeInstanceItem {
	Id: string;
	GmtCreate: number;
	GmtModified: number;
	Type: string;
	Status: string;
	JobId: string;
	JobName: string;
	JobType: string;
	FailAct: string;
	MaxRetry: string;
	RetryInterval: string;
	NodeName: string;
	ClusterId: string;
	HostName: string;
	ProjectId: string;
	Pending: boolean;
	StartTime: number;
	EndTime: number;
	Duration: number;
	Retries: number;
	ExternalId: string;
	ExternalStatus: string;
	ExternalInfo: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.NodeInstanceInDescribeFlowInstance
export interface NodeInstanceInDescribeFlowInstance {
	NodeInstanceItem: NodeInstanceItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DescribeFlowInstanceResponse
export interface DescribeFlowInstanceResponse {
	RequestId: string;
	Id: string;
	GmtCreate: number;
	GmtModified: number;
	FlowId: string;
	FlowName: string;
	ProjectId: string;
	Status: string;
	ClusterId: string;
	StartTime: number;
	EndTime: number;
	Duration: number;
	ScheduleTime: number;
	Graph: string;
	CronExpression: string;
	HasNodeFailed: boolean;
	DependencyFlowList: DependencyFlowList;
	NodeInstance: NodeInstanceInDescribeFlowInstance;
}

