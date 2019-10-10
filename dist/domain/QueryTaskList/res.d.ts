// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.TaskInfo
export interface TaskInfo {
	TaskType: string;
	TaskNum: number;
	TaskStatus: string;
	CreateTime: string;
	Clientip: string;
	TaskNo: string;
	TaskStatusCode: number;
	TaskTypeDescription: string;
	TaskCancelStatus: string;
	TaskCancelStatusCode: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.DataInQueryTaskList
export interface DataInQueryTaskList {
	TaskInfo: TaskInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryTaskListResponse
export interface QueryTaskListResponse {
	RequestId: string;
	TotalItemNum: number;
	CurrentPageNum: number;
	TotalPageNum: number;
	PageSize: number;
	PrePage: boolean;
	NextPage: boolean;
	Data: DataInQueryTaskList;
}

