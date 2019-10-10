// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.FailuresItem
export interface FailuresItem {
	Message: string;
	Code: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.FailuresInPreCheckCreateOrderForDegrade
export interface FailuresInPreCheckCreateOrderForDegrade {
	FailuresItem: FailuresItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.PreCheckCreateOrderForDegradeResponse
export interface PreCheckCreateOrderForDegradeResponse {
	RequestId: string;
	PreCheckResult: boolean;
	Failures: FailuresInPreCheckCreateOrderForDegrade;
}

