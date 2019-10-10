// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistIdsInQueryFacerecogJobList
export interface NonExistIdsInQueryFacerecogJobList {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Celebrity
export interface Celebrity {
	Name: string;
	Score: string;
	Target: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CelebritiesInQueryMcuJob
export interface CelebritiesInQueryMcuJob {
	Celebrity: Celebrity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Face
export interface Face {
	Name: string;
	Time: string;
	Score: string;
	ImageUrl: string;
	ImageId: string;
	Target: string;
	Celebrities: CelebritiesInQueryMcuJob;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Faces
export interface Faces {
	Face: Face[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Facerecog
export interface Facerecog {
	Time: string;
	Faces: Faces;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Facerecogs
export interface Facerecogs {
	Facerecog: Facerecog[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.VideoFacerecogResult
export interface VideoFacerecogResult {
	Facerecogs: Facerecogs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FacerecogJob
export interface FacerecogJob {
	Id: string;
	UserData: string;
	PipelineId: string;
	State: string;
	Code: string;
	Message: string;
	CreationTime: string;
	Input: Input;
	VideoFacerecogResult: VideoFacerecogResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FacerecogJobList
export interface FacerecogJobList {
	FacerecogJob: FacerecogJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryFacerecogJobListResponse
export interface QueryFacerecogJobListResponse {
	RequestId: string;
	NonExistIds: NonExistIdsInQueryFacerecogJobList;
	FacerecogJobList: FacerecogJobList;
}

