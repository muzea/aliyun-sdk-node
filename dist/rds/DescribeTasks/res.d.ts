// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.TaskProgressInfo
export interface TaskProgressInfo {
	DBName: string;
	BeginTime: string;
	ProgressInfo: string;
	FinishTime: string;
	TaskAction: string;
	TaskId: string;
	Progress: string;
	ExpectedFinishTime: string;
	Status: string;
	TaskErrorCode: string;
	TaskErrorMessage: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeTasks
export interface ItemsInDescribeTasks {
	TaskProgressInfo: TaskProgressInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeTasksResponse
export interface DescribeTasksResponse {
	RequestId: string;
	TotalRecordCount: number;
	PageNumber: number;
	PageRecordCount: number;
	Items: ItemsInDescribeTasks;
}

