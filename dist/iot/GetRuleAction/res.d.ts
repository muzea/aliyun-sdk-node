// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.RuleActionInfo
export interface RuleActionInfo {
	Configuration: string;
	RuleId: number;
	Id: number;
	ErrorActionFlag: boolean;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.GetRuleActionResponse
export interface GetRuleActionResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	RuleActionInfo: RuleActionInfo;
}

