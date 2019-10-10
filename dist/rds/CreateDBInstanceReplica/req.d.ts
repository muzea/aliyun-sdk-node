interface CreateDBInstanceReplicaRequest {
    "RegionId": string;
    "SourceDBInstanceId": string;
    "Engine": string;
    "OwnerId"?: number;
    "EngineVersion"?: string;
    "DBInstanceClass"?: string;
    "DBInstanceStorage"?: number;
    "SystemDBCharset"?: string;
    "DBInstanceNetType"?: string;
    "DBInstanceDescription"?: string;
    "SecurityIPList"?: string;
    "ClientToken"?: string;
    "PayType"?: string;
    "ZoneId"?: string;
    "InstanceNetworkType"?: string;
    "ConnectionMode"?: string;
    "VPCId"?: string;
    "VSwitchId"?: string;
    "PrivateIpAddress"?: string;
    "ReplicaDescription"?: string;
    "UsedTime"?: string;
    "Period"?: string;
    "ReplicaMode"?: string;
    "DomainMode"?: string;
}
export { CreateDBInstanceReplicaRequest };