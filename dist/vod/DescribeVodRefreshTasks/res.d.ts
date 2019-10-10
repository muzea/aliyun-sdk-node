// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Task
export interface Task {
	TaskId: string;
	ObjectPath: string;
	Process: string;
	Status: string;
	CreationTime: string;
	Description: string;
	ObjectType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Tasks
export interface Tasks {
	Task: Task[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribeVodRefreshTasksResponse
export interface DescribeVodRefreshTasksResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	Tasks: Tasks;
}

