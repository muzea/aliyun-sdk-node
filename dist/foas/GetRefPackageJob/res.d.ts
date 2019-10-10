// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Job
export interface Job {
	ModifyTime: number;
	ClusterId: string;
	QueueName: string;
	JobId: string;
	Code: string;
	EngineVersion: string;
	ApiType: string;
	IsCommitted: boolean;
	FolderId: number;
	Packages: string;
	CreateTime: number;
	PlanJson: string;
	ProjectName: string;
	Modifier: string;
	Creator: string;
	JobType: string;
	JobName: string;
	Properties: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.JobsInGetRefPackageJob
export interface JobsInGetRefPackageJob {
	Job: Job[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.GetRefPackageJobResponse
export interface GetRefPackageJobResponse {
	RequestId: string;
	PageIndex: number;
	PageSize: number;
	TotalCount: number;
	TotalPage: number;
	Jobs: JobsInGetRefPackageJob;
}

