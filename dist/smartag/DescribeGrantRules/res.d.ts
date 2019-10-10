// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.GrantRule
export interface GrantRule {
	GrantRuleId: string;
	CenUid: number;
	CcnId: number;
	CenInstanceId: string;
	CcnInstanceId: string;
	GmtCreate: number;
	GmtModified: number;
	RegionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.GrantRules
export interface GrantRules {
	GrantRule: GrantRule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.DescribeGrantRulesResponse
export interface DescribeGrantRulesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	GrantRules: GrantRules;
}

