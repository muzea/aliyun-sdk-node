interface ConfigureSubscriptionInstanceRequest {
    "RegionId"?: string;
    "SubscriptionInstanceId": string;
    "SubscriptionDataType.DDL": boolean;
    "SubscriptionDataType.DML": boolean;
    "SubscriptionObject": string;
    "SubscriptionInstanceName"?: string;
    "SourceEndpoint.InstanceType"?: string;
    "SourceEndpoint.InstanceID"?: string;
    "SourceEndpoint.IP"?: string;
    "SourceEndpoint.Port"?: string;
    "SourceEndpoint.UserName"?: string;
    "SourceEndpoint.Password"?: string;
    "SourceEndpoint.OracleSID"?: string;
    "SourceEndpoint.DatabaseName"?: string;
    "SourceEndpoint.OwnerID"?: string;
    "SourceEndpoint.Role"?: string;
    "SubscriptionInstanceNetworkType"?: string;
    "SubscriptionInstance.VPCId"?: string;
    "SubscriptionInstance.VSwitchId"?: string;
    "OwnerId"?: string;
}
export { ConfigureSubscriptionInstanceRequest };