interface UpgradeSmartAccessGatewaySoftwareRequest {
    "RegionId": string;
    "SmartAGId": string;
    "AutoPay": boolean;
    "DataPlan": number;
    "UserCount": number;
    "OwnerId"?: number;
}
export { UpgradeSmartAccessGatewaySoftwareRequest };