// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeLoadBalancerUDPListenerAttributeResponse
export interface DescribeLoadBalancerUDPListenerAttributeResponse {
	RequestId: string;
	ListenerPort: number;
	BackendServerPort: number;
	Status: string;
	Bandwidth: number;
	Scheduler: string;
	PersistenceTimeout: number;
	HealthCheck: string;
	HealthyThreshold: number;
	UnhealthyThreshold: number;
	HealthCheckConnectTimeout: number;
	HealthCheckConnectPort: number;
	HealthCheckInterval: number;
	HealthCheckReq: string;
	HealthCheckExp: string;
	MaxConnection: number;
	VServerGroupId: string;
	MasterSlaveServerGroupId: string;
	AclId: string;
	AclType: string;
	AclStatus: string;
	VpcIds: string;
	Description: string;
}

