// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.CurrentPageCursor
export interface CurrentPageCursor {
	ErrorMsg: string;
	TaskDetailNo: string;
	UpdateTime: string;
	CreateTimeLong: number;
	TaskStatusCode: number;
	DomainName: string;
	CreateTime: string;
	TaskTypeDescription: string;
	TaskStatus: string;
	TaskNum: number;
	TaskNo: string;
	InstanceId: string;
	Clientip: string;
	TryCount: number;
	TaskType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.NextPageCursor
export interface NextPageCursor {
	ErrorMsg: string;
	TaskDetailNo: string;
	UpdateTime: string;
	CreateTimeLong: number;
	TaskStatusCode: number;
	DomainName: string;
	CreateTime: string;
	TaskTypeDescription: string;
	TaskStatus: string;
	TaskNum: number;
	TaskNo: string;
	InstanceId: string;
	Clientip: string;
	TryCount: number;
	TaskType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.PrePageCursor
export interface PrePageCursor {
	ErrorMsg: string;
	TaskDetailNo: string;
	UpdateTime: string;
	CreateTimeLong: number;
	TaskStatusCode: number;
	DomainName: string;
	CreateTime: string;
	TaskTypeDescription: string;
	TaskStatus: string;
	TaskNum: number;
	TaskNo: string;
	InstanceId: string;
	Clientip: string;
	TryCount: number;
	TaskType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.TaskDetailHistory
export interface TaskDetailHistory {
	TaskNo: string;
	TaskDetailNo: string;
	TaskType: string;
	InstanceId: string;
	DomainName: string;
	TaskStatus: string;
	UpdateTime: string;
	CreateTime: string;
	TryCount: number;
	ErrorMsg: string;
	TaskStatusCode: number;
	TaskTypeDescription: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryTaskDetailHistoryResponse
export interface QueryTaskDetailHistoryResponse {
	RequestId: string;
	PageSize: number;
	CurrentPageCursor: CurrentPageCursor;
	NextPageCursor: NextPageCursor;
	PrePageCursor: PrePageCursor;
	Objects: TaskDetailHistory[];
}

