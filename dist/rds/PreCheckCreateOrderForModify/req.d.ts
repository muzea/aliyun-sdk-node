interface PreCheckCreateOrderForModifyRequest {
    "RegionId"?: string;
    "DBInstanceClass": string;
    "DBInstanceStorage": number;
    "OwnerId"?: number;
    "ClientToken"?: string;
    "DBInstanceId"?: string;
    "CommodityCode": string;
    "ZoneId"?: string;
    "UsedTime"?: string;
    "TimeType"?: string;
    "PayType"?: string;
    "EffectiveTime"?: string;
    "Resource"?: string;
    "AutoPay"?: boolean;
    "PromotionCode"?: string;
    "EngineVersion"?: string;
    "InstanceNetworkType"?: string;
    "DBInstanceStorageType"?: string;
    "NodeType"?: string;
    "BusinessInfo"?: string;
    "VpcId"?: string;
    "VSwitchId"?: string;
    "SwitchTime"?: string;
}
export { PreCheckCreateOrderForModifyRequest };