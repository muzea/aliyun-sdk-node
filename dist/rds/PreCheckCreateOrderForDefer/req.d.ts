interface PreCheckCreateOrderForDeferRequest {
    "RegionId": string;
    "CommodityCode": string;
    "UsedTime": string;
    "TimeType": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    "DBInstanceId"?: string;
    "DBInstanceStorage"?: number;
    "Resource"?: string;
    "AutoPay"?: boolean;
    "PayType"?: string;
    "RenewChange"?: boolean;
    "DBInstanceStorageType"?: string;
    "DBInstanceClass"?: string;
    "BusinessInfo"?: string;
}
export { PreCheckCreateOrderForDeferRequest };