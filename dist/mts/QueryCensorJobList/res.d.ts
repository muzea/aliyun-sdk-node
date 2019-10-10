// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistIdsInQueryCensorJobList
export interface NonExistIdsInQueryCensorJobList {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CensorConfig
export interface CensorConfig {
	Interval: string;
	BizType: string;
	SaveType: string;
	Scenes: string;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TerrorismCounterListInQueryTerrorismJobList
export interface TerrorismCounterListInQueryTerrorismJobList {
	Counter: Counter[];
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ImageCensorResult
export interface ImageCensorResult {
	ImageLocation: string;
	ImageBucket: string;
	ImageObject: string;
	Result: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ImageCensorResults
export interface ImageCensorResults {
	ImageCensorResult: ImageCensorResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CensorJob
export interface CensorJob {
	Id: string;
	UserData: string;
	PipelineId: string;
	State: string;
	Code: string;
	Message: string;
	CreationTime: string;
	TitleCensorResult: string;
	DescCensorResult: string;
	BarrageCensorResult: string;
	ResultSaveObject: string;
	Input: Input;
	CensorConfig: CensorConfig;
	CensorPornResult: CensorPornResult;
	CensorTerrorismResult: CensorTerrorismResult;
	ImageCensorResults: ImageCensorResults;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CensorJobList
export interface CensorJobList {
	CensorJob: CensorJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryCensorJobListResponse
export interface QueryCensorJobListResponse {
	RequestId: string;
	NonExistIds: NonExistIdsInQueryCensorJobList;
	CensorJobList: CensorJobList;
}

