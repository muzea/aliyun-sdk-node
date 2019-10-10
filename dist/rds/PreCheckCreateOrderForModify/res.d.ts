// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.FailuresItem
export interface FailuresItem {
	Message: string;
	Code: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.FailuresInPreCheckCreateOrderForModify
export interface FailuresInPreCheckCreateOrderForModify {
	FailuresItem: FailuresItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.PreCheckCreateOrderForModifyResponse
export interface PreCheckCreateOrderForModifyResponse {
	RequestId: string;
	PreCheckResult: boolean;
	Failures: FailuresInPreCheckCreateOrderForModify;
}

