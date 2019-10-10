interface PreCheckCreateOrderRequest {
    "RegionId": string;
    "CommodityCode": string;
    "Engine": string;
    "EngineVersion": string;
    "DBInstanceClass": string;
    "DBInstanceStorage": number;
    "DBInstanceNetType": string;
    "Quantity": number;
    "OwnerId"?: number;
    "ClientToken"?: string;
    "DBInstanceId"?: string;
    "SystemDBCharset"?: string;
    "DBInstanceDescription"?: string;
    "SecurityIPList"?: string;
    "PayType"?: string;
    "ZoneId"?: string;
    "InstanceNetworkType"?: string;
    "UsedTime"?: string;
    "TimeType"?: string;
    "AutoPay"?: boolean;
    "InstanceUsedType"?: number;
    "Resource"?: string;
    "ConnectionMode"?: string;
    "VPCId"?: string;
    "VSwitchId"?: string;
    "PrivateIpAddress"?: string;
    "CountryCode"?: string;
    "CurrencyCode"?: string;
    "AutoRenew"?: string;
    "AgentId"?: string;
    "PromotionCode"?: string;
    "BusinessInfo"?: string;
    "BackupId"?: string;
    "RestoreTime"?: string;
    "DBInstanceStorageType"?: string;
    "NodeType"?: string;
    "ResourceGroupId"?: string;
    "Category"?: string;
    "ZoneIdSlave1"?: string;
    "ZoneIdSlave2"?: string;
    "EncryptionKey"?: string;
    "RoleARN"?: string;
}
export { PreCheckCreateOrderRequest };