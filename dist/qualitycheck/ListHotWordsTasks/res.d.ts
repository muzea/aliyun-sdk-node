// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DialogueParam
export interface DialogueParam {
	DialogueId: number;
	Role: number;
	StartIndex: number;
	EndIndex: number;
	SourceType: number;
	DataSetIds: string;
	StartTime: string;
	EndTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.WordsParam
export interface WordsParam {
	ExtraConfigId: number;
	Excludes: string;
	Includes: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.HotWordsTaskPo
export interface HotWordsTaskPo {
	TaskConfigId: number;
	Name: string;
	Status: number;
	Type: number;
	StartTime: string;
	TimeInterval: number;
	TimeUnit: number;
	EndTime: string;
	InstanceStatus: number;
	LastExecutionTime: string;
	Message: string;
	DialogueParam: DialogueParam;
	WordsParam: WordsParam;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInListHotWordsTasks
export interface DataInListHotWordsTasks {
	HotWordsTaskPo: HotWordsTaskPo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ListHotWordsTasksResponse
export interface ListHotWordsTasksResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	PageNumber: number;
	PageSize: number;
	Count: number;
	Data: DataInListHotWordsTasks;
}

