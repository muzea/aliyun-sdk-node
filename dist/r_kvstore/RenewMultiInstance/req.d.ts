interface RenewMultiInstanceRequest {
    "RegionId"?: string;
    "Period": number;
    "OwnerId"?: number;
    "InstanceIds": string;
    "FromApp"?: string;
    "AutoPay"?: boolean;
    "BusinessInfo"?: string;
    "CouponNo"?: string;
}
export { RenewMultiInstanceRequest };