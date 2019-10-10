interface PreCheckCreateOrderForRebuildRequest {
    "RegionId": string;
    "CommodityCode": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    "DBInstanceId"?: string;
    "ZoneId"?: string;
    "DBInstanceClass"?: string;
    "PayType"?: string;
    "InstanceNetworkType"?: string;
    "UsedTime"?: string;
    "TimeType"?: string;
    "AutoPay"?: boolean;
    "Resource"?: string;
    "VPCId"?: string;
    "VSwitchId"?: string;
    "AutoRenew"?: string;
    "AgentId"?: string;
    "PromotionCode"?: string;
    "BusinessInfo"?: string;
    "DBInstanceDescription"?: string;
    "ResourceGroupId"?: string;
    "RebuildInstanceFlag"?: boolean;
}
export { PreCheckCreateOrderForRebuildRequest };