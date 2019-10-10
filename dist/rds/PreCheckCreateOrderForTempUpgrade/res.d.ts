// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.FailuresItem
export interface FailuresItem {
	Message: string;
	Code: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.FailuresInPreCheckCreateOrderForTempUpgrade
export interface FailuresInPreCheckCreateOrderForTempUpgrade {
	FailuresItem: FailuresItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.PreCheckCreateOrderForTempUpgradeResponse
export interface PreCheckCreateOrderForTempUpgradeResponse {
	RequestId: string;
	PreCheckResult: boolean;
	Failures: FailuresInPreCheckCreateOrderForTempUpgrade;
}

