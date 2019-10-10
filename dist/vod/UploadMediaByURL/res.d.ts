// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.UploadJob
export interface UploadJob {
	JobId: string;
	SourceURL: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.UploadMediaByURLResponse
export interface UploadMediaByURLResponse {
	RequestId: string;
	UploadJobs: UploadJob[];
}

