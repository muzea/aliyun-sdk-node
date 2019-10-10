// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.AlertResult
export interface AlertResult {
	RuleId: string;
	RuleName: string;
	Message: string;
	Code: number;
	Success: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ResourcesInCreateGroupMetricRules
export interface ResourcesInCreateGroupMetricRules {
	AlertResult: AlertResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.CreateGroupMetricRulesResponse
export interface CreateGroupMetricRulesResponse {
	RequestId: string;
	Success: boolean;
	Code: number;
	Message: string;
	Resources: ResourcesInCreateGroupMetricRules;
}

