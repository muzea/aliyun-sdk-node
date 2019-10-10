// this file was automatically generated, DO NOT EDIT
// structs
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DBNodesInDescribeDBClusters
export interface DBNodesInDescribeDBClusters {
	DBNode: DBNode[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.Tag
export interface Tag {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.TagsInDescribeDBClusters
export interface TagsInDescribeDBClusters {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DBCluster
export interface DBCluster {
	DBClusterId: string;
	DBClusterDescription: string;
	PayType: string;
	DBClusterNetworkType: string;
	RegionId: string;
	ZoneId: string;
	ExpireTime: string;
	Expired: string;
	DBClusterStatus: string;
	Engine: string;
	DBType: string;
	DBVersion: string;
	LockMode: string;
	DeletionLock: number;
	CreateTime: string;
	VpcId: string;
	DBNodeNumber: number;
	DBNodeClass: string;
	StorageUsed: number;
	DBNodes: DBNodesInDescribeDBClusters;
	Tags: TagsInDescribeDBClusters;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.ItemsInDescribeDBClusters
export interface ItemsInDescribeDBClusters {
	DBCluster: DBCluster[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DescribeDBClustersResponse
export interface DescribeDBClustersResponse {
	RequestId: string;
	PageNumber: number;
	TotalRecordCount: number;
	PageRecordCount: number;
	Items: ItemsInDescribeDBClusters;
}

