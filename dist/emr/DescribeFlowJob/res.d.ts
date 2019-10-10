// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Resource
export interface Resource {
	Path: string;
	Alias: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ResourceListInDescribeFlowJob
export interface ResourceListInDescribeFlowJob {
	Resource: Resource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DescribeFlowJobResponse
export interface DescribeFlowJobResponse {
	RequestId: string;
	Id: string;
	GmtCreate: number;
	GmtModified: number;
	Name: string;
	Type: string;
	Description: string;
	FailAct: string;
	MaxRetry: number;
	RetryInterval: number;
	Params: string;
	ParamConf: string;
	CustomVariables: string;
	EnvConf: string;
	RunConf: string;
	MonitorConf: string;
	CategoryId: string;
	mode: string;
	LastInstanceId: string;
	Adhoc: string;
	AlertConf: string;
	ResourceList: ResourceListInDescribeFlowJob;
}

