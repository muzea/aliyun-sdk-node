interface QueryOrdersRequest {
    "RegionId"?: string;
    "CreateTimeEnd"?: string;
    "PageNum"?: number;
    "PageSize"?: number;
    "ProductCode"?: string;
    "ProductType"?: string;
    "SubscriptionType"?: string;
    "OrderType"?: string;
    "PaymentStatus"?: string;
    "CreateTimeStart"?: string;
    "OwnerId"?: number;
}
export { QueryOrdersRequest };