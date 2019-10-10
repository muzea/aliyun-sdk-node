// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistIdsInQueryTagJobList
export interface NonExistIdsInQueryTagJobList {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TagAnResult
export interface TagAnResult {
	Label: string;
	Score: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TagAnResults
export interface TagAnResults {
	TagAnResult: TagAnResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TagFace
export interface TagFace {
	Name: string;
	Score: string;
	Target: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TagFaces
export interface TagFaces {
	TagFace: TagFace[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TagFrResult
export interface TagFrResult {
	Time: string;
	TagFaces: TagFaces;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TagFrResults
export interface TagFrResults {
	TagFrResult: TagFrResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoTagResult
export interface VideoTagResult {
	Details: string;
	TagAnResults: TagAnResults;
	TagFrResults: TagFrResults;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TagJob
export interface TagJob {
	Id: string;
	UserData: string;
	PipelineId: string;
	State: string;
	Code: string;
	Message: string;
	CreationTime: string;
	Input: Input;
	VideoTagResult: VideoTagResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TagJobList
export interface TagJobList {
	TagJob: TagJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryTagJobListResponse
export interface QueryTagJobListResponse {
	RequestId: string;
	NonExistIds: NonExistIdsInQueryTagJobList;
	TagJobList: TagJobList;
}

