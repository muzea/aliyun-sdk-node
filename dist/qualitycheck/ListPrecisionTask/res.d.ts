// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Precision
export interface Precision {
	Status: number;
	TaskId: string;
	ModelName: string;
	Precision: number;
	ModelId: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.PrecisionsInListPrecisionTask
export interface PrecisionsInListPrecisionTask {
	Precision: Precision[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.PrecisionTask
export interface PrecisionTask {
	Name: string;
	TaskId: string;
	Source: number;
	DataSetId: number;
	DataSetName: string;
	Duration: number;
	Status: number;
	TotalCount: number;
	VerifiedCount: number;
	IncorrectWords: number;
	CreateTime: string;
	UpdateTime: string;
	Precisions: PrecisionsInListPrecisionTask;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInListPrecisionTask
export interface DataInListPrecisionTask {
	PrecisionTask: PrecisionTask[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ListPrecisionTaskResponse
export interface ListPrecisionTaskResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	PageNumber: number;
	PageSize: number;
	Count: number;
	Data: DataInListPrecisionTask;
}

