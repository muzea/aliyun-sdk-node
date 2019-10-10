// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Ipv6EgressOnlyRule
export interface Ipv6EgressOnlyRule {
	Ipv6EgressOnlyRuleId: string;
	InstanceType: string;
	InstanceId: string;
	Status: string;
	Name: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Ipv6EgressOnlyRules
export interface Ipv6EgressOnlyRules {
	Ipv6EgressOnlyRule: Ipv6EgressOnlyRule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeIpv6EgressOnlyRulesResponse
export interface DescribeIpv6EgressOnlyRulesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Ipv6EgressOnlyRules: Ipv6EgressOnlyRules;
}

