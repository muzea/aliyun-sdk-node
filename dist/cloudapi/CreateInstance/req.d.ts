interface CreateInstanceRequest {
    "RegionId": string;
    "ChargeType": string;
    "InstanceName": string;
    "InstanceSpec": string;
    "Token": string;
    "ZoneId"?: string;
    "HttpsPolicy"?: string;
    "Duration"?: number;
    "PricingCycle"?: string;
    "AutoPay"?: boolean;
}
export { CreateInstanceRequest };