// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistIdsInQueryFpShotJobList
export interface NonExistIdsInQueryFpShotJobList {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistPrimaryKeys
export interface NonExistPrimaryKeys {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.InputFile
export interface InputFile {
	Bucket: string;
	Object: string;
	Location: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FpShotConfig
export interface FpShotConfig {
	PrimaryKey: string;
	SaveType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Duplication
export interface Duplication {
	Duration: string;
	Start: string;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FpShotSlice
export interface FpShotSlice {
	Duplication: Duplication;
	Input: Input;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FpShotSlicesInQueryFpShotJobList
export interface FpShotSlicesInQueryFpShotJobList {
	FpShotSlice: FpShotSlice[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FpShot
export interface FpShot {
	Similarity: string;
	PrimaryKey: string;
	FpShotSlices: FpShotSlicesInQueryFpShotJobList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FpShots
export interface FpShots {
	FpShot: FpShot[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.AudioFpShots
export interface AudioFpShots {
	FpShot: FpShot[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FpShotResult
export interface FpShotResult {
	FpShots: FpShots;
	AudioFpShots: AudioFpShots;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FpShotJob
export interface FpShotJob {
	Id: string;
	UserData: string;
	PipelineId: string;
	FileId: string;
	State: string;
	Code: string;
	Message: string;
	CreationTime: string;
	FinishTime: string;
	InputFile: InputFile;
	FpShotConfig: FpShotConfig;
	FpShotResult: FpShotResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FpShotJobList
export interface FpShotJobList {
	FpShotJob: FpShotJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryFpShotJobListResponse
export interface QueryFpShotJobListResponse {
	RequestId: string;
	NextPageToken: string;
	NonExistIds: NonExistIdsInQueryFpShotJobList;
	NonExistPrimaryKeys: NonExistPrimaryKeys;
	FpShotJobList: FpShotJobList;
}

