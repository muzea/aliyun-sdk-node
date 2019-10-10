// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstanceId
export interface DBInstanceId {
	DBInstanceId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.Extra
export interface Extra {
	ReplicaGroupID: string;
	ReplicaGroupStatus: string;
	ActiveReplicaDBInstanceID: string;
	DBInstanceId: DBInstanceId;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ReadOnlyDBInstanceId
export interface ReadOnlyDBInstanceId {
	DBInstanceId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ReadOnlyDBInstanceIdsInDescribeDBInstanceAttribute
export interface ReadOnlyDBInstanceIdsInDescribeDBInstanceAttribute {
	ReadOnlyDBInstanceId: ReadOnlyDBInstanceId[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SlaveZone
export interface SlaveZone {
	ZoneId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SlaveZones
export interface SlaveZones {
	SlaveZone: SlaveZone[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstanceAttribute
export interface DBInstanceAttribute {
	TimeZone: string;
	Engine: string;
	TempUpgradeTimeStart: string;
	TempUpgradeRecoveryTime: string;
	TempUpgradeRecoveryMaxIOPS: string;
	DBInstanceDiskUsed: string;
	AdvancedFeatures: string;
	DBInstanceClass: string;
	DBInstanceNetType: string;
	VpcCloudInstanceId: string;
	DBMaxQuantity: number;
	DBInstanceCPU: string;
	MaxConnections: number;
	IncrementSourceDBInstanceId: string;
	InstanceNetworkType: string;
	DBInstanceType: string;
	TempUpgradeRecoveryClass: string;
	DBInstanceId: string;
	DBInstanceMemory: number;
	VpcId: string;
	DBInstanceStorageType: string;
	SecurityIPList: string;
	LatestKernelVersion: string;
	SupportUpgradeAccountType: string;
	MaxIOPS: number;
	Tags: string;
	EngineVersion: string;
	MaintainTime: string;
	PayType: string;
	DBInstanceStorage: number;
	SupportCreateSuperAccount: string;
	TempDBInstanceId: string;
	CurrentKernelVersion: string;
	ZoneId: string;
	ConnectionMode: string;
	IPType: string;
	ReadonlyInstanceSQLDelayedTime: string;
	LockMode: string;
	MasterZone: string;
	CanTempUpgrade: boolean;
	Collation: string;
	LockReason: string;
	Category: string;
	GuardDBInstanceId: string;
	InsId: number;
	DBInstanceDescription: string;
	AccountType: string;
	GuardDBInstanceName: string;
	RegionId: string;
	ResourceGroupId: string;
	TempUpgradeTimeEnd: string;
	ExpireTime: string;
	TempUpgradeRecoveryMemory: number;
	DispenseMode: string;
	AccountMaxQuantity: number;
	TempUpgradeRecoveryMaxConnections: string;
	Port: string;
	VSwitchId: string;
	CreationTime: string;
	MasterInstanceId: string;
	SecurityIPMode: string;
	DBInstanceClassType: string;
	ReadDelayTime: string;
	DBInstanceStatus: string;
	ReplicateId: string;
	ConnectionString: string;
	TempUpgradeRecoveryCpu: number;
	AvailabilityValue: string;
	AutoUpgradeMinorVersion: string;
	Extra: Extra;
	ReadOnlyDBInstanceIds: ReadOnlyDBInstanceIdsInDescribeDBInstanceAttribute;
	SlaveZones: SlaveZones;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeDBInstanceAttribute
export interface ItemsInDescribeDBInstanceAttribute {
	DBInstanceAttribute: DBInstanceAttribute[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeDBInstanceAttributeResponse
export interface DescribeDBInstanceAttributeResponse {
	RequestId: string;
	Items: ItemsInDescribeDBInstanceAttribute;
}

