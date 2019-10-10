// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.Task
export interface Task {
	TaskType: number;
	Label: string;
	Id: number;
	TargetId: number;
	ParentJobId: string;
	TaskStatus: number;
	ShowProgress: boolean;
	GmtCreate: number;
	TaskPhase: string;
	ErrMsg: string;
	ExpandType: string;
	State: string;
	Content: string;
	AllowCancel: boolean;
	TaskName: string;
	Progress: number;
	ProgressDescription: string;
	TaskDetail: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.TasksInDescribeDrdsDbTasks
export interface TasksInDescribeDrdsDbTasks {
	Task: Task[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeDrdsDbTasksResponse
export interface DescribeDrdsDbTasksResponse {
	RequestId: string;
	Success: boolean;
	Tasks: TasksInDescribeDrdsDbTasks;
}

