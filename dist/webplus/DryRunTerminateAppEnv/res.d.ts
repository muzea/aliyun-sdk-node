// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.Operation
export interface Operation {
	OperationDescription: string;
	OperationType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.OperationsInDryRunRebuildAppEnv
export interface OperationsInDryRunRebuildAppEnv {
	Operation: Operation[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DryRunInfo
export interface DryRunInfo {
	Operations: OperationsInDryRunRebuildAppEnv;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DryRunTerminateAppEnvResponse
export interface DryRunTerminateAppEnvResponse {
	RequestId: string;
	Code: string;
	Message: string;
	DryRunInfo: DryRunInfo;
}

