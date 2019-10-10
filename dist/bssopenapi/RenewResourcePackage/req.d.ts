interface RenewResourcePackageRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "Duration": number;
    "PricingCycle": string;
    "OwnerId"?: number;
    "EffectiveDate"?: string;
}
export { RenewResourcePackageRequest };