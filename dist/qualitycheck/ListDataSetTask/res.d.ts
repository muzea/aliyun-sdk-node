// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataSets
export interface DataSets {
	dataSets: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RuleNameInfoInListDataSetTask
export interface RuleNameInfoInListDataSetTask {
	Rid: number;
	RuleName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RuleNameInfoList
export interface RuleNameInfoList {
	RuleNameInfo: RuleNameInfoInListDataSetTask[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.PageTaskInfo
export interface PageTaskInfo {
	JobName: string;
	ScheduleRatio: number;
	TaskId: string;
	TaskComplete: boolean;
	Status: number;
	IsTaskComplete: boolean;
	RuleSize: number;
	DataSetSize: number;
	DataSets: DataSets;
	RuleNameInfoList: RuleNameInfoList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInListDataSetTask
export interface DataInListDataSetTask {
	PageTaskInfo: PageTaskInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ListDataSetTaskResponse
export interface ListDataSetTaskResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	DataSize: number;
	PageSize: number;
	CurrentPage: number;
	TotalCount: number;
	IsAllcomplete: number;
	Data: DataInListDataSetTask;
}

