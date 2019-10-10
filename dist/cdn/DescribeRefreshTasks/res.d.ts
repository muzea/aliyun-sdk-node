// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.CDNTask
export interface CDNTask {
	TaskId: string;
	ObjectPath: string;
	Process: string;
	Status: string;
	CreationTime: string;
	Description: string;
	ObjectType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.Tasks
export interface Tasks {
	CDNTask: CDNTask[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeRefreshTasksResponse
export interface DescribeRefreshTasksResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	Tasks: Tasks;
}

