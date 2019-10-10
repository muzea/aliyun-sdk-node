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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.MasterSlaveBackendServersInCreateMasterSlaveVServerGroup
export interface MasterSlaveBackendServersInCreateMasterSlaveVServerGroup {
	MasterSlaveBackendServer: MasterSlaveBackendServer[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.CreateMasterSlaveVServerGroupResponse
export interface CreateMasterSlaveVServerGroupResponse {
	RequestId: string;
	MasterSlaveVServerGroupId: string;
	MasterSlaveBackendServers: MasterSlaveBackendServersInCreateMasterSlaveVServerGroup;
}

