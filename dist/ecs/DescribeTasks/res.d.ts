// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Task
export interface Task {
	TaskId: string;
	TaskAction: string;
	TaskStatus: string;
	SupportCancel: string;
	CreationTime: string;
	FinishedTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.TaskSet
export interface TaskSet {
	Task: Task[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeTasksResponse
export interface DescribeTasksResponse {
	RequestId: string;
	RegionId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	TaskSet: TaskSet;
}

