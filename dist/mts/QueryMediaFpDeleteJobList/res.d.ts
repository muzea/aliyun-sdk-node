// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistIdsInQueryMediaFpDeleteJobList
export interface NonExistIdsInQueryMediaFpDeleteJobList {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaFpDeleteJob
export interface MediaFpDeleteJob {
	Id: string;
	UserData: string;
	PipelineId: string;
	State: string;
	Code: string;
	Message: string;
	CreationTime: string;
	FinishTime: string;
	PrimaryKey: string;
	FpDBId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaFpDeleteJobList
export interface MediaFpDeleteJobList {
	MediaFpDeleteJob: MediaFpDeleteJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryMediaFpDeleteJobListResponse
export interface QueryMediaFpDeleteJobListResponse {
	RequestId: string;
	NonExistIds: NonExistIdsInQueryMediaFpDeleteJobList;
	MediaFpDeleteJobList: MediaFpDeleteJobList;
}

