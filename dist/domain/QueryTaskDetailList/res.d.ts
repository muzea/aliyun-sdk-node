// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.TaskDetail
export interface TaskDetail {
	ErrorMsg: string;
	TaskDetailNo: string;
	UpdateTime: string;
	DomainName: string;
	TaskStatusCode: number;
	CreateTime: string;
	TaskTypeDescription: string;
	TaskStatus: string;
	TaskNo: string;
	InstanceId: string;
	TryCount: number;
	TaskType: string;
	TaskResult: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.DataInQueryTaskDetailList
export interface DataInQueryTaskDetailList {
	TaskDetail: TaskDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryTaskDetailListResponse
export interface QueryTaskDetailListResponse {
	RequestId: string;
	TotalItemNum: number;
	CurrentPageNum: number;
	TotalPageNum: number;
	PageSize: number;
	PrePage: boolean;
	NextPage: boolean;
	Data: DataInQueryTaskDetailList;
}

