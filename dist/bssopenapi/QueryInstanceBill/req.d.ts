interface QueryInstanceBillRequest {
    "RegionId"?: string;
    "BillingCycle": string;
    "ProductCode"?: string;
    "ProductType"?: string;
    "SubscriptionType"?: string;
    "OwnerId"?: number;
    "IsBillingItem"?: boolean;
    "PageNum"?: number;
    "PageSize"?: number;
    "IsHideZeroCharge"?: boolean;
}
export { QueryInstanceBillRequest };