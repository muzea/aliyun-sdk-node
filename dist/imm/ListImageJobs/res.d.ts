// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.JobsItem
export interface JobsItem {
	JobId: string;
	SetId: string;
	Result: string;
	ErrorMessage: string;
	CreateTime: string;
	FinishTime: string;
	SrcUri: string;
	Parameters: string;
	Percent: number;
	StartTime: string;
	EndTime: string;
	Progress: number;
	NotifyEndpoint: string;
	Status: string;
	NotifyTopicName: string;
	JobType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.ListImageJobsResponse
export interface ListImageJobsResponse {
	RequestId: string;
	NextMarker: string;
	Jobs: JobsItem[];
}

