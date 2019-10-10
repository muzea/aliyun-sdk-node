interface PreCheckCreateOrderForTempUpgradeRequest {
    "RegionId": string;
    "CommodityCode": string;
    "DBInstanceId": string;
    "UsedTime": string;
    "DBInstanceStorage": number;
    "DBInstanceClass": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    "DBInstanceStorageType"?: string;
    "NodeType"?: string;
    "Resource"?: string;
    "AutoPay"?: boolean;
    "BusinessInfo"?: string;
    "EffectiveTime"?: string;
}
export { PreCheckCreateOrderForTempUpgradeRequest };