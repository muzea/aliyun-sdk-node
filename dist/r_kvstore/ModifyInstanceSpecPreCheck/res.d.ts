// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.PreCheckResult
export interface PreCheckResult {
	UsedMemorySize: string;
	AllowModify: string;
	Code: string;
	Message: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.ModifyInstanceSpecPreCheckResponse
export interface ModifyInstanceSpecPreCheckResponse {
	RequestId: string;
	IsAllowModify: boolean;
	DisableCommands: string;
	PreCheckResult: PreCheckResult;
}

