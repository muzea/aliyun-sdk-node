interface CreateInstanceRequest {
    "RegionId"?: string;
    "ClientToken": string;
    "Duration": number;
    "PricingCycle": string;
    "VersionCode": number;
    "VmNumber": number;
    "OwnerId"?: number;
    "IsAutoRenew"?: boolean;
    "AutoRenewDuration"?: number;
}
export { CreateInstanceRequest };