interface QuerySettlementBillRequest {
    "RegionId"?: string;
    "BillingCycle": string;
    "PageSize"?: number;
    "OwnerId"?: number;
    "PageNum"?: number;
    "StartTime"?: string;
    "EndTime"?: string;
    "Type"?: string;
    "ProductCode"?: string;
    "ProductType"?: string;
    "SubscriptionType"?: string;
    "IsHideZeroCharge"?: boolean;
}
export { QuerySettlementBillRequest };