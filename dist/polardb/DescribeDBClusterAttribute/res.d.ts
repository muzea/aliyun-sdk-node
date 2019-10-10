// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.Tag
export interface Tag {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DBNode
export interface DBNode {
	DBNodeClass: string;
	MaxIOPS: number;
	DBNodeRole: string;
	RegionId: string;
	MaxConnections: number;
	ZoneId: string;
	DBNodeStatus: string;
	DBNodeId: string;
	CreationTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DescribeDBClusterAttributeResponse
export interface DescribeDBClusterAttributeResponse {
	RequestId: string;
	RegionId: string;
	DBClusterNetworkType: string;
	VPCId: string;
	VSwitchId: string;
	PayType: string;
	DBClusterId: string;
	DBClusterStatus: string;
	DBClusterDescription: string;
	Engine: string;
	DBType: string;
	DBVersion: string;
	LockMode: string;
	DeletionLock: number;
	CreationTime: string;
	ExpireTime: string;
	Expired: string;
	MaintainTime: string;
	StorageUsed: number;
	StorageMax: number;
	ZoneIds: string;
	SQLSize: number;
	IsLatestVersion: boolean;
	Tags: Tag[];
	DBNodes: DBNode[];
}

