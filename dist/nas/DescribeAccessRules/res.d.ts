// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeAccessRulesAccessRule1
export interface DescribeAccessRulesAccessRule1 {
	SourceCidrIp: string;
	Priority: number;
	AccessRuleId: string;
	RWAccess: string;
	UserAccess: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeAccessRulesAccessRules0
export interface DescribeAccessRulesAccessRules0 {
	AccessRule: DescribeAccessRulesAccessRule1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeAccessRulesResponse
export interface DescribeAccessRulesResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	AccessRules: DescribeAccessRulesAccessRules0;
}

