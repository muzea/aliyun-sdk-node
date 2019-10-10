// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistIdsInQueryCoverJobList
export interface NonExistIdsInQueryCoverJobList {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.InputFile
export interface InputFile {
	Bucket: string;
	Object: string;
	Location: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Input
export interface Input {
	Bucket: string;
	Duration: string;
	Start: string;
	UserData: string;
	Object: string;
	Location: string;
	RoleArn: string;
	Url: string;
	InputFile: InputFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.OutputFile
export interface OutputFile {
	Bucket: string;
	Object: string;
	Location: string;
	RoleArn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CoverConfig
export interface CoverConfig {
	OutputFile: OutputFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CoverImage
export interface CoverImage {
	Score: string;
	Url: string;
	Time: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CoverImageList
export interface CoverImageList {
	CoverImage: CoverImage[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CoverJob
export interface CoverJob {
	Id: string;
	UserData: string;
	PipelineId: string;
	State: string;
	Code: string;
	Message: string;
	CreationTime: string;
	Input: Input;
	CoverConfig: CoverConfig;
	CoverImageList: CoverImageList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CoverJobList
export interface CoverJobList {
	CoverJob: CoverJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryCoverJobListResponse
export interface QueryCoverJobListResponse {
	RequestId: string;
	NextPageToken: string;
	NonExistIds: NonExistIdsInQueryCoverJobList;
	CoverJobList: CoverJobList;
}

