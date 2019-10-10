// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/waf_openapi.Rule
export interface Rule {
	RuleId: number;
	Version: number;
	Content: string;
	Time: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/waf_openapi.DescribeProtectionModuleRulesResponse
export interface DescribeProtectionModuleRulesResponse {
	RequestId: string;
	TotalCount: number;
	Rules: Rule[];
}

