// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DescribeFlowNodeInstanceResponse
export interface DescribeFlowNodeInstanceResponse {
	RequestId: string;
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
	ParamConf: string;
	EnvConf: string;
	RunConf: string;
	Adhoc: boolean;
	MonitorConf: string;
	Mode: string;
	ClusterName: string;
}

