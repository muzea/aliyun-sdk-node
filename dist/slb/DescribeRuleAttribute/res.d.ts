// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeRuleAttributeResponse
export interface DescribeRuleAttributeResponse {
	RuleId: string;
	RequestId: string;
	RuleName: string;
	LoadBalancerId: string;
	ListenerPort: string;
	Domain: string;
	Url: string;
	VServerGroupId: string;
	ListenerSync: string;
	Scheduler: string;
	StickySession: string;
	StickySessionType: string;
	CookieTimeout: number;
	Cookie: string;
	HealthCheck: string;
	HealthCheckDomain: string;
	HealthCheckURI: string;
	HealthyThreshold: number;
	UnhealthyThreshold: number;
	HealthCheckTimeout: number;
	HealthCheckInterval: number;
	HealthCheckConnectPort: number;
	HealthCheckHttpCode: string;
}

