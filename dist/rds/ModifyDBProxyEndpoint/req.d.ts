interface ModifyDBProxyEndpointRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "DBProxyEndpointId"?: string;
    "ConfigDBProxyFeatures"?: string;
    "DBInstanceId": string;
    "ReadOnlyInstanceMaxDelayTime"?: string;
    "ReadOnlyInstanceDistributionType"?: string;
    "ReadOnlyInstanceWeight"?: string;
}
export { ModifyDBProxyEndpointRequest };