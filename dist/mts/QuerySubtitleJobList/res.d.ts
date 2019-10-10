// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistJobIdsInQuerySubtitleJobList
export interface NonExistJobIdsInQuerySubtitleJobList {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MNSMessageResult
export interface MNSMessageResult {
	MessageId: string;
	ErrorMessage: string;
	ErrorCode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.JobInQuerySubtitleJobList
export interface JobInQuerySubtitleJobList {
	JobId: string;
	InputConfig: string;
	OutputConfig: string;
	UserData: string;
	State: string;
	MNSMessageResult: MNSMessageResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.JobListInQuerySubtitleJobList
export interface JobListInQuerySubtitleJobList {
	Job: JobInQuerySubtitleJobList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QuerySubtitleJobListResponse
export interface QuerySubtitleJobListResponse {
	RequestId: string;
	NonExistJobIds: NonExistJobIdsInQuerySubtitleJobList;
	JobList: JobListInQuerySubtitleJobList;
}

