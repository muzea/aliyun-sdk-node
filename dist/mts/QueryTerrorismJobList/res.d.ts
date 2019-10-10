// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistIdsInQueryTerrorismJobList
export interface NonExistIdsInQueryTerrorismJobList {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismConfig
export interface TerrorismConfig {
	Interval: string;
	BizType: string;
	OutputFile: OutputFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Counter
export interface Counter {
	Count: number;
	Label: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismCounterListInQueryTerrorismJobList
export interface TerrorismCounterListInQueryTerrorismJobList {
	Counter: Counter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Top
export interface Top {
	Score: string;
	Timestamp: string;
	Label: string;
	Object: string;
	Index: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismTopListInQueryTerrorismJobList
export interface TerrorismTopListInQueryTerrorismJobList {
	Top: Top[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CensorTerrorismResult
export interface CensorTerrorismResult {
	MaxScore: string;
	Label: string;
	Suggestion: string;
	AverageScore: string;
	TerrorismCounterList: TerrorismCounterListInQueryTerrorismJobList;
	TerrorismTopList: TerrorismTopListInQueryTerrorismJobList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismJob
export interface TerrorismJob {
	Id: string;
	UserData: string;
	PipelineId: string;
	State: string;
	Code: string;
	Message: string;
	CreationTime: string;
	Input: Input;
	TerrorismConfig: TerrorismConfig;
	CensorTerrorismResult: CensorTerrorismResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismJobList
export interface TerrorismJobList {
	TerrorismJob: TerrorismJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryTerrorismJobListResponse
export interface QueryTerrorismJobListResponse {
	RequestId: string;
	NonExistIds: NonExistIdsInQueryTerrorismJobList;
	TerrorismJobList: TerrorismJobList;
}

