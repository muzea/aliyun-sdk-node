interface ModifyCenBandwidthPackageSpecRequest {
    "RegionId"?: string;
    /**
    * 带宽包的ID。
    * @example `cenbwp-4c2zaavbvh5x****`
    */ "CenBandwidthPackageId": string;
    /**
    * 带宽包的带宽峰值，单位为Mbps，最小为**2**。
    * @example `2`
    */ "Bandwidth": number;
    "OwnerId"?: number;
}
export { ModifyCenBandwidthPackageSpecRequest };