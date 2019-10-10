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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.RulesInDescribeVServerGroups
export interface RulesInDescribeVServerGroups {
	Rule: Rule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.Listener
export interface Listener {
	Port: number;
	Protocol: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.ListenersInDescribeMasterSlaveServerGroups
export interface ListenersInDescribeMasterSlaveServerGroups {
	Listener: Listener[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.AssociatedObjects
export interface AssociatedObjects {
	Rules: RulesInDescribeVServerGroups;
	Listeners: ListenersInDescribeMasterSlaveServerGroups;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.MasterSlaveServerGroup
export interface MasterSlaveServerGroup {
	MasterSlaveServerGroupId: string;
	MasterSlaveServerGroupName: string;
	AssociatedObjects: AssociatedObjects;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.MasterSlaveServerGroups
export interface MasterSlaveServerGroups {
	MasterSlaveServerGroup: MasterSlaveServerGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeMasterSlaveServerGroupsResponse
export interface DescribeMasterSlaveServerGroupsResponse {
	RequestId: string;
	MasterSlaveServerGroups: MasterSlaveServerGroups;
}

