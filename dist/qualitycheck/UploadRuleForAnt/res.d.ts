// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInUploadRuleForAnt
export interface DataInUploadRuleForAnt {
	RidInfo: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.UploadRuleForAntResponse
export interface UploadRuleForAntResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInUploadRuleForAnt;
}

