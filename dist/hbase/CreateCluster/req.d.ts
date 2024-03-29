interface CreateClusterRequest {
    "RegionId": string;
    "ZoneId": string;
    "ClusterName": string;
    "NetType": string;
    "MasterInstanceType": string;
    "CoreInstanceType": string;
    "CoreDiskType": string;
    "CoreDiskSize": string;
    "CoreDiskQuantity": string;
    "CoreInstanceQuantity": string;
    "Engine": string;
    "SecurityIPList": string;
    "EngineVersion": string;
    "CloudType": string;
    "ClientToken"?: string;
    "VpcId"?: string;
    "VSwitchId"?: string;
    "PayType"?: string;
    "AutoRenew"?: string;
    "DbInstanceType"?: string;
    "DbInstanceConnType"?: string;
    "BackupId"?: string;
    "SrcDBInstanceId"?: string;
    "RestoreTime"?: string;
    "IsColdStorage"?: string;
    "ColdStorageSize"?: string;
    "DbType"?: string;
    "PricingCycle"?: string;
    "Duration"?: string;
    "DepMode"?: string;
}
export { CreateClusterRequest };