// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.Rule
export interface Rule {
	Domain: string;
	HealthCheckTimeout: number;
	RuleName: string;
	HealthCheckURI: string;
	StickySession: string;
	HealthCheckInterval: number;
	ListenerSync: string;
	RuleId: string;
	HealthCheckDomain: string;
	Scheduler: string;
	Url: string;
	VServerGroupId: string;
	HealthyThreshold: number;
	CookieTimeout: number;
	HealthCheckHttpCode: string;
	UnhealthyThreshold: number;
	StickySessionType: string;
	HealthCheckConnectPort: number;
	Cookie: string;
	HealthCheck: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.RulesInCreateRules
export interface RulesInCreateRules {
	Rule: Rule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.CreateRulesResponse
export interface CreateRulesResponse {
	RequestId: string;
	Rules: RulesInCreateRules;
}

