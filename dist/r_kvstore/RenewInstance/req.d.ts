interface RenewInstanceRequest {
    "RegionId"?: string;
    "Period": number;
    "OwnerId"?: number;
    "InstanceId": string;
    "Capacity"?: string;
    "InstanceClass"?: string;
    "AutoPay"?: boolean;
    "FromApp"?: string;
    "BusinessInfo"?: string;
    "CouponNo"?: string;
    "ForceUpgrade"?: boolean;
}
export { RenewInstanceRequest };