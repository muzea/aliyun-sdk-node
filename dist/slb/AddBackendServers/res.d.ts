// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.BackendServerInAddBackendServers
export interface BackendServerInAddBackendServers {
	ServerId: string;
	Weight: string;
	ServerIp: string;
	VpcId: string;
	Type: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.BackendServersInAddBackendServers
export interface BackendServersInAddBackendServers {
	BackendServer: BackendServerInAddBackendServers[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.AddBackendServersResponse
export interface AddBackendServersResponse {
	RequestId: string;
	LoadBalancerId: string;
	BackendServers: BackendServersInAddBackendServers;
}

