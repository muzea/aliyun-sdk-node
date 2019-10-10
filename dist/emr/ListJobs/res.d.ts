// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.JobInfo
export interface JobInfo {
	Name: string;
	ClusterId: string;
	JobId: string;
	FailAct: string;
	IndexNO: number;
	RetryInterval: number;
	Status: number;
	MaxRetry: number;
	Id: string;
	RunParameter: string;
	Description: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Jobs
export interface Jobs {
	JobInfo: JobInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListJobsResponse
export interface ListJobsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Jobs: Jobs;
}

