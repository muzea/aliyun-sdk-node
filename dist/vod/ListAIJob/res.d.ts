// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.NonExistAIJobIds
export interface NonExistAIJobIds {
	String: string[];
}

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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.AIJobListInListAIJob
export interface AIJobListInListAIJob {
	AIJob: AIJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.ListAIJobResponse
export interface ListAIJobResponse {
	RequestId: string;
	NonExistAIJobIds: NonExistAIJobIds;
	AIJobList: AIJobListInListAIJob;
}

