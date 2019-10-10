// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/oos.Task
export interface Task {
	Name: string;
	Type: string;
	Description: string;
	Properties: string;
	Outputs: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/oos.ValidateTemplateContentResponse
export interface ValidateTemplateContentResponse {
	RequestId: string;
	Parameters: string;
	RamRole: string;
	Outputs: string;
	Tasks: Task[];
}

