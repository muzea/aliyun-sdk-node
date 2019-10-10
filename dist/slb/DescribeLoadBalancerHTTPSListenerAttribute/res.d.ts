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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.RulesInDescribeLoadBalancerHTTPSListenerAttribute
export interface RulesInDescribeLoadBalancerHTTPSListenerAttribute {
	Rule: Rule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DomainExtension
export interface DomainExtension {
	Domain: string;
	ServerCertificateId: string;
	DomainExtensionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DomainExtensionsInDescribeLoadBalancerHTTPSListenerAttribute
export interface DomainExtensionsInDescribeLoadBalancerHTTPSListenerAttribute {
	DomainExtension: DomainExtension[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeLoadBalancerHTTPSListenerAttributeResponse
export interface DescribeLoadBalancerHTTPSListenerAttributeResponse {
	RequestId: string;
	ListenerPort: number;
	BackendServerPort: number;
	BackendProtocol: number;
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
	ServerCertificateId: string;
	CACertificateId: string;
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
	RequestTimeout: number;
	IdleTimeout: number;
	EnableHttp2: string;
	TLSCipherPolicy: string;
	Description: string;
	Rules: RulesInDescribeLoadBalancerHTTPSListenerAttribute;
	DomainExtensions: DomainExtensionsInDescribeLoadBalancerHTTPSListenerAttribute;
}

