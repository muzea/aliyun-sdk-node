// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.MasterSlaveBackendServer
export interface MasterSlaveBackendServer {
	Port: number;
	ServerIp: string;
	ServerId: string;
	ServerType: string;
	VpcId: string;
	Weight: number;
	Description: string;
	IsBackup: number;
	EniHost: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.MasterSlaveBackendServersInDescribeMasterSlaveServerGroupAttribute
export interface MasterSlaveBackendServersInDescribeMasterSlaveServerGroupAttribute {
	MasterSlaveBackendServer: MasterSlaveBackendServer[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeMasterSlaveServerGroupAttributeResponse
export interface DescribeMasterSlaveServerGroupAttributeResponse {
	RequestId: string;
	LoadBalancerId: string;
	MasterSlaveServerGroupId: string;
	MasterSlaveServerGroupName: string;
	MasterSlaveBackendServers: MasterSlaveBackendServersInDescribeMasterSlaveServerGroupAttribute;
}

