interface CreateDBClusterRequest {
    "RegionId": string;
    "DBType": string;
    "DBVersion": string;
    "DBNodeClass": string;
    "PayType": string;
    "OwnerId"?: number;
    "ZoneId"?: string;
    "Engine"?: string;
    "ClusterNetworkType"?: string;
    "DBClusterDescription"?: string;
    "AutoRenew"?: boolean;
    "Period"?: string;
    "UsedTime"?: string;
    "VPCId"?: string;
    "VSwitchId"?: string;
    "CreationOption"?: string;
    "SourceResourceId"?: string;
    "CloneDataPoint"?: string;
    "ClientToken"?: string;
}
export { CreateDBClusterRequest };