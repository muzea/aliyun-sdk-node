// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.FlowNodeInstance
export interface FlowNodeInstance {
	Id: string;
	GmtCreate: number;
	GmtModified: number;
	Type: string;
	Status: string;
	JobId: string;
	JobName: string;
	JobType: string;
	JobParams: string;
	FailAct: string;
	MaxRetry: string;
	RetryInterval: string;
	NodeName: string;
	FlowId: string;
	FlowInstanceId: string;
	ClusterId: string;
	HostName: string;
	ProjectId: string;
	Pending: boolean;
	StartTime: number;
	EndTime: number;
	Duration: number;
	Retries: number;
	ExternalId: string;
	ExternalSubId: string;
	ExternalChildIds: string;
	ExternalStatus: string;
	ExternalInfo: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.FlowNodeInstances
export interface FlowNodeInstances {
	FlowNodeInstance: FlowNodeInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListFlowNodeInstanceResponse
export interface ListFlowNodeInstanceResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	Total: number;
	FlowNodeInstances: FlowNodeInstances;
}

