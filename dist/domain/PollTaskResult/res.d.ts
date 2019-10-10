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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.DataInPollTaskResult
export interface DataInPollTaskResult {
	TaskDetail: TaskDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.PollTaskResultResponse
export interface PollTaskResultResponse {
	RequestId: string;
	TotalItemNum: number;
	CurrentPageNum: number;
	TotalPageNum: number;
	PageSize: number;
	PrePage: boolean;
	NextPage: boolean;
	Data: DataInPollTaskResult;
}

