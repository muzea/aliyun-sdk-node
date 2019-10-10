// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Resource
export interface Resource {
	Path: string;
	Alias: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ResourceListInListFlowJob
export interface ResourceListInListFlowJob {
	Resource: Resource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Job
export interface Job {
	Name: string;
	FailAct: string;
	RunConf: string;
	RetryInterval: number;
	ParamConf: string;
	mode: string;
	MaxRetry: number;
	EnvConf: string;
	AlertConf: string;
	GmtCreate: number;
	CategoryId: string;
	GmtModified: number;
	Id: string;
	Description: string;
	CustomVariables: string;
	MonitorConf: string;
	Params: string;
	Adhoc: string;
	Type: string;
	LastInstanceDetail: string;
	ResourceList: ResourceListInListFlowJob;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.JobListInListFlowJob
export interface JobListInListFlowJob {
	Job: Job[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListFlowJobResponse
export interface ListFlowJobResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	Total: number;
	JobList: JobListInListFlowJob;
}

