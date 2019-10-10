// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.FailuresItem
export interface FailuresItem {
	Message: string;
	Code: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.FailuresInPreCheckCreateOrderForClone
export interface FailuresInPreCheckCreateOrderForClone {
	FailuresItem: FailuresItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.PreCheckCreateOrderForCloneResponse
export interface PreCheckCreateOrderForCloneResponse {
	RequestId: string;
	PreCheckResult: boolean;
	Failures: FailuresInPreCheckCreateOrderForClone;
}

