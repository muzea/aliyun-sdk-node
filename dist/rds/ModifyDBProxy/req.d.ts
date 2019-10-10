interface ModifyDBProxyRequest {
    "RegionId"?: string;
    "ConfigDBProxyService": string;
    "OwnerId"?: number;
    "DBProxyInstanceNum"?: string;
    "DBInstanceId": string;
    "InstanceNetworkType"?: string;
    "VPCId"?: string;
    "VSwitchId"?: string;
    "CloudInstanceId"?: string;
}
export { ModifyDBProxyRequest };