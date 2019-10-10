// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ReadOnlyDBInstanceId
export interface ReadOnlyDBInstanceId {
	DBInstanceId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ReadOnlyDBInstanceIdsInDescribeDBInstances
export interface ReadOnlyDBInstanceIdsInDescribeDBInstances {
	ReadOnlyDBInstanceId: ReadOnlyDBInstanceId[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstance
export interface DBInstance {
	InsId: number;
	DBInstanceId: string;
	DBInstanceDescription: string;
	PayType: string;
	DBInstanceType: string;
	RegionId: string;
	ExpireTime: string;
	DestroyTime: string;
	DBInstanceStatus: string;
	Engine: string;
	DBInstanceNetType: string;
	ConnectionMode: string;
	LockMode: string;
	Category: string;
	DBInstanceStorageType: string;
	DBInstanceClass: string;
	InstanceNetworkType: string;
	VpcCloudInstanceId: string;
	LockReason: string;
	ZoneId: string;
	MutriORsignle: boolean;
	CreateTime: string;
	EngineVersion: string;
	GuardDBInstanceId: string;
	TempDBInstanceId: string;
	MasterInstanceId: string;
	VpcId: string;
	VSwitchId: string;
	ReplicateId: string;
	ResourceGroupId: string;
	AutoUpgradeMinorVersion: string;
	ReadOnlyDBInstanceIds: ReadOnlyDBInstanceIdsInDescribeDBInstances;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeDBInstances
export interface ItemsInDescribeDBInstances {
	DBInstance: DBInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeDBInstancesResponse
export interface DescribeDBInstancesResponse {
	RequestId: string;
	PageNumber: number;
	TotalRecordCount: number;
	PageRecordCount: number;
	Items: ItemsInDescribeDBInstances;
}

