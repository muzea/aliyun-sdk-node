// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.JobsItemInListPornBatchDetectJobs
export interface JobsItemInListPornBatchDetectJobs {
	JobId: string;
	SrcUri: string;
	Status: string;
	TgtUri: string;
	NotifyTopicName: number;
	NotifyEndpoint: string;
	ExternalID: string;
	CreateTime: string;
	FinishTime: string;
	Percent: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.ListPornBatchDetectJobsResponse
export interface ListPornBatchDetectJobsResponse {
	RequestId: string;
	NextMarker: string;
	Jobs: JobsItemInListPornBatchDetectJobs[];
}

