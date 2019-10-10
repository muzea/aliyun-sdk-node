interface CreateInstanceRequest {
    "RegionId"?: string;
    "ProductCode": string;
    "SubscriptionType": string;
    "Parameter"?: string[];
    "OwnerId"?: number;
    "ProductType"?: string;
    "Period"?: number;
    "RenewalStatus"?: string;
    "RenewPeriod"?: number;
    "ClientToken"?: string;
}
export { CreateInstanceRequest };