// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.Task
export interface Task {
	TaskId: string;
	NodeId: string;
	StartTime: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.Tasks
export interface Tasks {
	Task: Task[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DailyTask
export interface DailyTask {
	Date: string;
	Tasks: Tasks;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DailyTasks
export interface DailyTasks {
	DailyTask: DailyTask[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeCacheAnalysisReportListResponse
export interface DescribeCacheAnalysisReportListResponse {
	RequestId: string;
	InstanceId: string;
	TotalRecordCount: number;
	PageNumbers: number;
	PageRecordCount: number;
	DailyTasks: DailyTasks;
}

