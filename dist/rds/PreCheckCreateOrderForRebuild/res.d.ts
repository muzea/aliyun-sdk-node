// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.FailuresItem
export interface FailuresItem {
	Message: string;
	Code: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.FailuresInPreCheckCreateOrderForRebuild
export interface FailuresInPreCheckCreateOrderForRebuild {
	FailuresItem: FailuresItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.PreCheckCreateOrderForRebuildResponse
export interface PreCheckCreateOrderForRebuildResponse {
	RequestId: string;
	PreCheckResult: boolean;
	Failures: FailuresInPreCheckCreateOrderForRebuild;
}

