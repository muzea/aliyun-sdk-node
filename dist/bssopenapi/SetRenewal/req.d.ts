interface SetRenewalRequest {
    "RegionId"?: string;
    "InstanceIDs": string;
    "RenewalStatus": string;
    "RenewalPeriod"?: number;
    "OwnerId"?: number;
    "ProductCode"?: string;
    "ProductType"?: string;
    "SubscriptionType"?: string;
    "RenewalPeriodUnit"?: string;
}
export { SetRenewalRequest };