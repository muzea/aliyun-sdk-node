// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.PreprocessJob
export interface PreprocessJob {
	JobId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.PreprocessJobs
export interface PreprocessJobs {
	PreprocessJob: PreprocessJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.SubmitPreprocessJobsResponse
export interface SubmitPreprocessJobsResponse {
	RequestId: string;
	PreprocessJobs: PreprocessJobs;
}

