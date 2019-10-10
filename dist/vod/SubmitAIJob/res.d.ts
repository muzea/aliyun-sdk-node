// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.AIJob
export interface AIJob {
	JobId: string;
	Message: string;
	Code: string;
	Data: string;
	CreationTime: string;
	CompleteTime: string;
	Status: string;
	MediaId: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.AIJobListInSubmitAIJob
export interface AIJobListInSubmitAIJob {
	AIJob: AIJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.SubmitAIJobResponse
export interface SubmitAIJobResponse {
	RequestId: string;
	AIJobList: AIJobListInSubmitAIJob;
}

