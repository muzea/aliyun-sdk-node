// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.JobInstance
export interface JobInstance {
	StartTime: number;
	JobId: string;
	ClusterId: string;
	RetryInfo: string;
	Id: string;
	RunTime: number;
	Status: string;
	JobType: string;
	JobName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.JobInstancesInListJobExecutionInstances
export interface JobInstancesInListJobExecutionInstances {
	JobInstance: JobInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListJobExecutionInstancesResponse
export interface ListJobExecutionInstancesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	JobInstances: JobInstancesInListJobExecutionInstances;
}

