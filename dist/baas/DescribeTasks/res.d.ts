// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/baas.Task
export interface Task {
	TaskId: number;
	Action: string;
	Target: string;
	Sender: string;
	RequestTime: number;
	ResponseTime: string;
	Handled: boolean;
	Result: string;
	OperationType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/baas.DescribeTasksResponse
export interface DescribeTasksResponse {
	RequestId: string;
	Success: boolean;
	ErrorCode: number;
	DynamicCode: string;
	DynamicMessage: string;
	Result: Task[];
}

