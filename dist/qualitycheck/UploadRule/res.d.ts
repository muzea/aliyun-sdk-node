// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInUploadRule
export interface DataInUploadRule {
	RidInfo: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.UploadRuleResponse
export interface UploadRuleResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInUploadRule;
}

