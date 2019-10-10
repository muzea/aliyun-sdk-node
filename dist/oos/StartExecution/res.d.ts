// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/oos.CurrentTask
export interface CurrentTask {
	TaskExecutionId: string;
	TaskName: string;
	TaskAction: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/oos.Execution
export interface Execution {
	TemplateId: string;
	ExecutedBy: string;
	EndDate: string;
	TemplateName: string;
	RamRole: string;
	IsParent: boolean;
	StatusMessage: string;
	Mode: string;
	StartDate: string;
	SafetyCheck: string;
	TemplateVersion: string;
	CreateDate: string;
	Parameters: string;
	Counters: string;
	UpdateDate: string;
	ParentExecutionId: string;
	Outputs: string;
	ExecutionId: string;
	Status: string;
	CurrentTasks: CurrentTask[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/oos.StartExecutionResponse
export interface StartExecutionResponse {
	RequestId: string;
	Execution: Execution;
}

