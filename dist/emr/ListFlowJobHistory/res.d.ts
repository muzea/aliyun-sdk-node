// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.NodeInstance
export interface NodeInstance {
	RunConf: string;
	MaxRetry: number;
	EndTime: number;
	StartTime: number;
	NodeName: string;
	ProjectId: string;
	Id: string;
	JobType: string;
	JobName: string;
	Type: string;
	JobId: string;
	FailAct: string;
	ClusterId: string;
	RetryInterval: number;
	ParamConf: string;
	ExternalId: string;
	EnvConf: string;
	GmtCreate: number;
	ExternalInfo: string;
	Retries: number;
	GmtModified: number;
	ExternalStatus: string;
	JobParams: string;
	HostName: string;
	Status: string;
	pending: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.NodeInstances
export interface NodeInstances {
	NodeInstance: NodeInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListFlowJobHistoryResponse
export interface ListFlowJobHistoryResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	Total: number;
	NodeInstances: NodeInstances;
}

