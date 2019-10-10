// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistIdsInQueryAnnotationJobList
export interface NonExistIdsInQueryAnnotationJobList {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Annotation
export interface Annotation {
	Label: string;
	Score: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Annotations
export interface Annotations {
	Annotation: Annotation[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoAnnotationResult
export interface VideoAnnotationResult {
	Details: string;
	Annotations: Annotations;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AnnotationJob
export interface AnnotationJob {
	Id: string;
	UserData: string;
	PipelineId: string;
	State: string;
	Code: string;
	Message: string;
	CreationTime: string;
	Input: Input;
	VideoAnnotationResult: VideoAnnotationResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AnnotationJobList
export interface AnnotationJobList {
	AnnotationJob: AnnotationJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryAnnotationJobListResponse
export interface QueryAnnotationJobListResponse {
	RequestId: string;
	NonExistIds: NonExistIdsInQueryAnnotationJobList;
	AnnotationJobList: AnnotationJobList;
}

