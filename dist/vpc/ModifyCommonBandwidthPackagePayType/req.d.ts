interface ModifyCommonBandwidthPackagePayTypeRequest {
    "RegionId": string;
    "BandwidthPackageId": string;
    "PayType"?: string;
    "PricingCycle"?: string;
    "Duration"?: number;
    "AutoPay"?: boolean;
    "OwnerId"?: number;
    "Bandwidth"?: string;
    "KbpsBandwidth"?: string;
    "ResourceBid"?: string;
    "ResourceUid"?: number;
}
export { ModifyCommonBandwidthPackagePayTypeRequest };