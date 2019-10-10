// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.JobsProgress
export interface JobsProgress {
	Status: string;
	StartTime: number;
	Duration: number;
	TotalJobs: number;
	TotalNotAnswered: number;
	TotalCompleted: number;
	Scheduling: number;
	Executing: number;
	Paused: number;
	Failed: number;
	Cancelled: number;
	RepeatCall: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.GetJobsProgressResponse
export interface GetJobsProgressResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	JobsProgress: JobsProgress;
}

