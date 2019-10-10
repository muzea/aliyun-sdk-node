interface PreCheckCreateOrderForDegradeRequest {
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
    "BusinessInfo"?: string;
}
export { PreCheckCreateOrderForDegradeRequest };