interface CreateShardingInstanceRequest {
    "RegionId": string;
    "ShardReplicaClass": string;
    "ArchitectureType": string;
    "OwnerId"?: number;
    "Token"?: string;
    "InstanceName"?: string;
    "Password"?: string;
    "Capacity"?: number;
    "InstanceClass"?: string;
    "ZoneId"?: string;
    "Config"?: string;
    "ChargeType"?: string;
    "NodeType"?: string;
    "NetworkType"?: string;
    "VpcId"?: string;
    "VSwitchId"?: string;
    "Period"?: string;
    "BusinessInfo"?: string;
    "CouponNo"?: string;
    "SrcDBInstanceId"?: string;
    "BackupId"?: string;
    "InstanceType"?: string;
    "EngineVersion"?: string;
    "PrivateIpAddress"?: string;
    "IncrementalBackupMode"?: string;
    "ProxyMode"?: string;
    "RedisManagerClass"?: string;
    "ShardReplicaQuantity"?: number;
    "ShardStorageQuantity"?: number;
    "ProxyQuantity"?: number;
    "ShardQuantity"?: number;
    "SecurityIPList"?: string;
}
export { CreateShardingInstanceRequest };