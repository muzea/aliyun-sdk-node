// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.ReplicaSet
export interface ReplicaSet {
	VPCCloudInstanceId: string;
	ConnectionPort: string;
	RoleId: string;
	ExpiredTime: string;
	VPCId: string;
	VSwitchId: string;
	ReplicaSetRole: string;
	ConnectionDomain: string;
	NetworkType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.ReplicaSetsInDescribeDBInstanceAttribute
export interface ReplicaSetsInDescribeDBInstanceAttribute {
	ReplicaSet: ReplicaSet[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.ShardAttribute
export interface ShardAttribute {
	MaxIOPS: number;
	NodeId: string;
	NodeDescription: string;
	MaxConnections: number;
	NodeStorage: number;
	NodeClass: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.ShardListInDescribeDBInstances
export interface ShardListInDescribeDBInstances {
	ShardAttribute: ShardAttribute[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.MongosAttribute
export interface MongosAttribute {
	MaxIOPS: number;
	NodeId: string;
	NodeDescription: string;
	Port: number;
	MaxConnections: number;
	VPCId: string;
	ConnectSting: string;
	VSwitchId: string;
	NodeClass: string;
	VpcCloudInstanceId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.MongosListInDescribeDBInstanceAttribute
export interface MongosListInDescribeDBInstanceAttribute {
	MongosAttribute: MongosAttribute[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DBInstance
export interface DBInstance {
	ReplicaSetName: string;
	DBInstanceDescription: string;
	Engine: string;
	ChargeType: string;
	DBInstanceClass: string;
	DestroyTime: string;
	RegionId: string;
	LastDowngradeTime: string;
	MaxConnections: number;
	ResourceGroupId: string;
	DBInstanceType: string;
	MaintainEndTime: string;
	ExpireTime: string;
	DBInstanceId: string;
	NetworkType: string;
	ReplicationFactor: string;
	MaxIOPS: number;
	ReplacateId: string;
	EngineVersion: string;
	VPCId: string;
	VSwitchId: string;
	VPCCloudInstanceIds: string;
	MaintainStartTime: string;
	DBInstanceStorage: number;
	CreationTime: string;
	StorageEngine: string;
	DBInstanceStatus: string;
	CurrentKernelVersion: string;
	ZoneId: string;
	LockMode: string;
	ReplicaSets: ReplicaSetsInDescribeDBInstanceAttribute;
	ShardList: ShardListInDescribeDBInstances;
	MongosList: MongosListInDescribeDBInstanceAttribute;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DBInstancesInDescribeDBInstances
export interface DBInstancesInDescribeDBInstances {
	DBInstance: DBInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeDBInstancesResponse
export interface DescribeDBInstancesResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	DBInstances: DBInstancesInDescribeDBInstances;
}

