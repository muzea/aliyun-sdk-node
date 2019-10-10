// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InvokeInstance
export interface InvokeInstance {
	InstanceId: string;
	InstanceInvokeStatus: string;
	CreationTime: string;
	StartTime: string;
	FinishTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InvokeInstances
export interface InvokeInstances {
	InvokeInstance: InvokeInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InvocationResult
export interface InvocationResult {
	CommandId: string;
	InvokeId: string;
	InstanceId: string;
	StartTime: string;
	FinishedTime: string;
	Output: string;
	InvokeRecordStatus: string;
	ExitCode: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InvocationResults
export interface InvocationResults {
	InvocationResult: InvocationResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Invocation
export interface Invocation {
	PageNumber: number;
	CommandId: string;
	TotalCount: number;
	PageSize: number;
	Timed: boolean;
	Frequency: string;
	CommandName: string;
	Parameters: string;
	InvokeId: string;
	InvokeStatus: string;
	CommandContent: string;
	CommandType: string;
	InvokeInstances: InvokeInstances;
	InvocationResults: InvocationResults;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Invocations
export interface Invocations {
	Invocation: Invocation[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeInvocationsResponse
export interface DescribeInvocationsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Invocations: Invocations;
}

