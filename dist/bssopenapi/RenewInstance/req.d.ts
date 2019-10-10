interface RenewInstanceRequest {
    "RegionId"?: string;
    "ProductCode": string;
    "InstanceId": string;
    "RenewPeriod": number;
    "ClientToken"?: string;
    "ProductType"?: string;
    "OwnerId"?: number;
}
export { RenewInstanceRequest };