// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TranscodeJob
export interface TranscodeJob {
	JobId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TranscodeJobs
export interface TranscodeJobs {
	TranscodeJob: TranscodeJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.SubmitTranscodeJobsResponse
export interface SubmitTranscodeJobsResponse {
	RequestId: string;
	TranscodeTaskId: string;
	TranscodeJobs: TranscodeJobs;
}

