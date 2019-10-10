interface GetSubscriptionPriceRequest {
    "RegionId"?: string;
    "SubscriptionType": string;
    "ProductCode": string;
    "OrderType": string;
    "ModuleList": string[];
    "ServicePeriodUnit"?: string;
    "OwnerId"?: number;
    "ServicePeriodQuantity"?: number;
    "ProductType"?: string;
    "Region"?: string;
    "InstanceId"?: string;
    "Quantity"?: number;
}
export { GetSubscriptionPriceRequest };