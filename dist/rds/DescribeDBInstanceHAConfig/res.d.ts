// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.NodeInfo
export interface NodeInfo {
	NodeId: string;
	RegionId: string;
	LogSyncTime: string;
	DataSyncTime: string;
	NodeType: string;
	ZoneId: string;
	SyncStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.HostInstanceInfos
export interface HostInstanceInfos {
	NodeInfo: NodeInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeDBInstanceHAConfigResponse
export interface DescribeDBInstanceHAConfigResponse {
	RequestId: string;
	DBInstanceId: string;
	SyncMode: string;
	HAMode: string;
	HostInstanceInfos: HostInstanceInfos;
}

