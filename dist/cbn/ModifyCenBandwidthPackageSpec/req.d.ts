export interface ModifyCenBandwidthPackageSpecRequest {
    /**
     * 带宽包实例ID。
     * @example `cenbwp-4c2zaavbvh5x****`
     */
    "CenBandwidthPackageId": string;
    /**
     * 带宽包实例新的带宽峰值。单位：Mbps。
     * 取值范围：**2**~**10000**。
     * @example `2`
     */
    "Bandwidth"?: number;
}
