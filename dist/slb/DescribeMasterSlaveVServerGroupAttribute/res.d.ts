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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.MasterSlaveBackendServersInDescribeMasterSlaveVServerGroupAttribute
export interface MasterSlaveBackendServersInDescribeMasterSlaveVServerGroupAttribute {
	MasterSlaveBackendServer: MasterSlaveBackendServer[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeMasterSlaveVServerGroupAttributeResponse
export interface DescribeMasterSlaveVServerGroupAttributeResponse {
	RequestId: string;
	MasterSlaveVServerGroupId: string;
	MasterSlaveVServerGroupName: string;
	MasterSlaveBackendServers: MasterSlaveBackendServersInDescribeMasterSlaveVServerGroupAttribute;
}

