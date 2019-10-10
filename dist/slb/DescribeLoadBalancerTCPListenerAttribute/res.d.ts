// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeLoadBalancerTCPListenerAttributeResponse
export interface DescribeLoadBalancerTCPListenerAttributeResponse {
	RequestId: string;
	ListenerPort: number;
	BackendServerPort: number;
	Status: string;
	Bandwidth: number;
	Scheduler: string;
	SynProxy: string;
	PersistenceTimeout: number;
	EstablishedTimeout: number;
	HealthCheck: string;
	HealthyThreshold: number;
	UnhealthyThreshold: number;
	HealthCheckConnectTimeout: number;
	HealthCheckConnectPort: number;
	HealthCheckInterval: number;
	HealthCheckHttpCode: string;
	HealthCheckDomain: string;
	HealthCheckURI: string;
	HealthCheckType: string;
	HealthCheckMethod: string;
	MaxConnection: number;
	VServerGroupId: string;
	MasterSlaveServerGroupId: string;
	AclId: string;
	AclType: string;
	AclStatus: string;
	VpcIds: string;
	Description: string;
}

