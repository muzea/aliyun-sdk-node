interface QueryBillRequest {
    "RegionId"?: string;
    "BillingCycle": string;
    "Type"?: string;
    "ProductCode"?: string;
    "ProductType"?: string;
    "SubscriptionType"?: string;
    "IsHideZeroCharge"?: boolean;
    "IsDisplayLocalCurrency"?: boolean;
    "OwnerId"?: number;
    "PageNum"?: number;
    "PageSize"?: number;
}
export { QueryBillRequest };