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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.RulesInDescribeLoadBalancerHTTPListenerAttribute
export interface RulesInDescribeLoadBalancerHTTPListenerAttribute {
	Rule: Rule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeLoadBalancerHTTPListenerAttributeResponse
export interface DescribeLoadBalancerHTTPListenerAttributeResponse {
	RequestId: string;
	ListenerPort: number;
	BackendServerPort: number;
	Bandwidth: number;
	Status: string;
	SecurityStatus: string;
	XForwardedFor: string;
	Scheduler: string;
	StickySession: string;
	StickySessionType: string;
	CookieTimeout: number;
	Cookie: string;
	HealthCheck: string;
	HealthCheckType: string;
	HealthCheckDomain: string;
	HealthCheckURI: string;
	HealthyThreshold: number;
	UnhealthyThreshold: number;
	HealthCheckTimeout: number;
	HealthCheckInterval: number;
	HealthCheckConnectPort: number;
	HealthCheckHttpCode: string;
	HealthCheckMethod: string;
	HealthCheckHttpVersion: string;
	MaxConnection: number;
	VServerGroupId: string;
	Gzip: string;
	XForwardedFor_SLBIP: string;
	XForwardedFor_SLBID: string;
	XForwardedFor_proto: string;
	AclId: string;
	AclType: string;
	AclStatus: string;
	VpcIds: string;
	ListenerForward: string;
	ForwardPort: number;
	RequestTimeout: number;
	IdleTimeout: number;
	Description: string;
	Rules: RulesInDescribeLoadBalancerHTTPListenerAttribute;
}

