interface RenewClusterRequest {
    "RegionId"?: string;
    "ClusterId": string;
    "PricingCycle": string;
    "Duration": number;
    "OwnerId"?: number;
}
export { RenewClusterRequest };