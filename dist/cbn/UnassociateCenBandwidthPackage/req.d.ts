interface UnassociateCenBandwidthPackageRequest {
    "RegionId"?: string;
    /**
    * 云企业网实例的ID。
    * @example `cen-7qthudw0ll6j****`
    */ "CenId": string;
    /**
    * 带宽包的ID。
    * @example `cenbwp-4c2zaavbvh5****`
    */ "CenBandwidthPackageId": string;
    "OwnerId"?: number;
}
export { UnassociateCenBandwidthPackageRequest };