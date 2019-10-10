interface RenewDBInstanceRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "DBInstanceId": string;
    "ClientToken"?: string;
    "Period"?: number;
    "AutoPay"?: boolean;
    "BusinessInfo"?: string;
    "CouponNo"?: string;
}
export { RenewDBInstanceRequest };