// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistIdsInQueryPornJobList
export interface NonExistIdsInQueryPornJobList {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PornConfig
export interface PornConfig {
	Interval: string;
	BizType: string;
	OutputFile: OutputFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Counter
export interface Counter {
	Count: number;
	Label: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PornCounterListInQueryCensorJobList
export interface PornCounterListInQueryCensorJobList {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PornTopListInQueryCensorJobList
export interface PornTopListInQueryCensorJobList {
	Top: Top[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CensorPornResult
export interface CensorPornResult {
	MaxScore: string;
	Label: string;
	Suggestion: string;
	AverageScore: string;
	PornCounterList: PornCounterListInQueryCensorJobList;
	PornTopList: PornTopListInQueryCensorJobList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PornJob
export interface PornJob {
	Id: string;
	UserData: string;
	PipelineId: string;
	State: string;
	Code: string;
	Message: string;
	CreationTime: string;
	Input: Input;
	PornConfig: PornConfig;
	CensorPornResult: CensorPornResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PornJobList
export interface PornJobList {
	PornJob: PornJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryPornJobListResponse
export interface QueryPornJobListResponse {
	RequestId: string;
	NonExistIds: NonExistIdsInQueryPornJobList;
	PornJobList: PornJobList;
}

