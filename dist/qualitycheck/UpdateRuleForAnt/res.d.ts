// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInUpdateRuleForAnt
export interface DataInUpdateRuleForAnt {
	RidInfo: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.UpdateRuleForAntResponse
export interface UpdateRuleForAntResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInUpdateRuleForAnt;
}

