// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.BackendServerInSetBackendServers
export interface BackendServerInSetBackendServers {
	ServerId: string;
	Weight: string;
	ServerIp: string;
	VpcId: string;
	Type: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.BackendServersInSetBackendServers
export interface BackendServersInSetBackendServers {
	BackendServer: BackendServerInSetBackendServers[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.SetBackendServersResponse
export interface SetBackendServersResponse {
	RequestId: string;
	LoadBalancerId: string;
	BackendServers: BackendServersInSetBackendServers;
}

