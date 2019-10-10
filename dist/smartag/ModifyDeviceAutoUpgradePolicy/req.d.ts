interface ModifyDeviceAutoUpgradePolicyRequest {
    "RegionId": string;
    "SmartAGId": string;
    "SerialNumber": string;
    "UpgradeType": string;
    "Duration": number;
    "TimeZone": string;
    "CronExpression"?: string;
    "OwnerId"?: number;
}
export { ModifyDeviceAutoUpgradePolicyRequest };