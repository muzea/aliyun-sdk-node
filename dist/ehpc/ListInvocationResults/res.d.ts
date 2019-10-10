// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.InvocationResult
export interface InvocationResult {
	Success: boolean;
	CommandId: string;
	InstanceId: string;
	InvokeRecordStatus: string;
	FinishedTime: string;
	ExitCode: number;
	Message: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.InvocationResults
export interface InvocationResults {
	InvocationResult: InvocationResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListInvocationResultsResponse
export interface ListInvocationResultsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	InvocationResults: InvocationResults;
}

