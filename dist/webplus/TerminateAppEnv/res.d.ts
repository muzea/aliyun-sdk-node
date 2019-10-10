// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.Operation
export interface Operation {
	OperationDescription: string;
	OperationType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.OperationsInCreateAppEnv
export interface OperationsInCreateAppEnv {
	Operation: Operation[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.EnvChangeDetail
export interface EnvChangeDetail {
	StartTime: string;
	EnvId: string;
	ChangeId: string;
	Operations: OperationsInCreateAppEnv;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.TerminateAppEnvResponse
export interface TerminateAppEnvResponse {
	RequestId: string;
	Code: string;
	Message: string;
	EnvChangeDetail: EnvChangeDetail;
}

