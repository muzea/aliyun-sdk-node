// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.RunSummary
export interface RunSummary {
	LastErrorTime: number;
	InputDelay: number;
	EngineJobHandler: string;
	Id: number;
	ActualState: string;
	LastErrorMessage: string;
	ExpectState: string;
	JobName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.RunSummarys
export interface RunSummarys {
	RunSummary: RunSummary[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.BatchGetInstanceRunSummaryResponse
export interface BatchGetInstanceRunSummaryResponse {
	RequestId: string;
	RunSummarys: RunSummarys;
}

