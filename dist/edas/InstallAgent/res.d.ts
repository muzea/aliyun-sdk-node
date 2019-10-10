// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ExecutionResult
export interface ExecutionResult {
	InstanceId: string;
	Status: string;
	FinishedTime: string;
	InvokeRecordStatus: string;
	Success: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ExecutionResultList
export interface ExecutionResultList {
	ExecutionResult: ExecutionResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.InstallAgentResponse
export interface InstallAgentResponse {
	RequestId: string;
	Code: number;
	Message: string;
	ExecutionResultList: ExecutionResultList;
}

