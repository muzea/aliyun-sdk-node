// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/oos.TaskExecution
export interface TaskExecution {
	ExecutionId: string;
	TaskExecutionId: string;
	TemplateId: string;
	StartDate: string;
	EndDate: string;
	CreateDate: string;
	UpdateDate: string;
	Status: string;
	Properties: string;
	Outputs: string;
	TaskAction: string;
	TaskName: string;
	StatusMessage: string;
	ChildExecutionId: string;
	ParentTaskExecutionId: string;
	LoopItem: string;
	Loop: string;
	ExtraData: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/oos.ListTaskExecutionsResponse
export interface ListTaskExecutionsResponse {
	RequestId: string;
	MaxResults: number;
	NextToken: string;
	TaskExecutions: TaskExecution[];
}

