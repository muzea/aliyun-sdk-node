// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.BackendServer
export interface BackendServer {
	Port: number;
	Protocol: string;
	ServerIp: string;
	ServerHealthStatus: string;
	ServerId: string;
	VpcId: string;
	ListenerPort: number;
	Weight: number;
	Description: string;
	EniHost: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.BackendServersInRemoveVServerGroupBackendServers
export interface BackendServersInRemoveVServerGroupBackendServers {
	BackendServer: BackendServer[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.RemoveVServerGroupBackendServersResponse
export interface RemoveVServerGroupBackendServersResponse {
	RequestId: string;
	VServerGroupId: string;
	BackendServers: BackendServersInRemoveVServerGroupBackendServers;
}

