interface RenewInstanceRequest {
    "RegionId"?: string;
    "ClientToken": string;
    "InstanceId": string;
    "VmNumber": string;
    "Duration": number;
    "PricingCycle": string;
    "OwnerId"?: number;
}
export { RenewInstanceRequest };