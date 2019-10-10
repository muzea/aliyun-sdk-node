// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.FlowInstance
export interface FlowInstance {
	Id: string;
	GmtCreate: number;
	GmtModified: number;
	FlowId: string;
	FlowName: string;
	ProjectId: string;
	Status: string;
	ClusterId: string;
	Owner: string;
	StartTime: number;
	EndTime: number;
	Duration: number;
	HasNodeFailed: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.FlowInstances
export interface FlowInstances {
	FlowInstance: FlowInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListFlowInstanceResponse
export interface ListFlowInstanceResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	Total: number;
	FlowInstances: FlowInstances;
}

