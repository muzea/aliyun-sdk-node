// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Resources
export interface Resources {
	Nodes: number;
	Cores: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.JobInfo
export interface JobInfo {
	Id: string;
	Name: string;
	Owner: string;
	NodeList: string;
	Priority: number;
	State: string;
	SubmitTime: string;
	StartTime: string;
	LastModifyTime: string;
	Stdout: string;
	Stderr: string;
	ShellPath: string;
	Comment: string;
	ArrayRequest: string;
	Resources: Resources;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Jobs
export interface Jobs {
	JobInfo: JobInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListJobsResponse
export interface ListJobsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Jobs: Jobs;
}

