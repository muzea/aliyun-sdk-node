interface AssociateCenBandwidthPackageRequest {
    "RegionId"?: string;
    /**
    * 云企业网实例的ID。
    * @example `cen-7qthudw0ll6jmc****`
    */ "CenId": string;
    /**
    * 带宽包的ID。
    * @example `cenbwp-4c2zaavbvh5fx****`
    */ "CenBandwidthPackageId": string;
    "OwnerId"?: number;
}
export { AssociateCenBandwidthPackageRequest };