export interface DescribeBandwidthPackageRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要查询的带宽包的ID。
     * @example `gbwp-bp1sgzldyj6b4q7cx****`
     */
    "BandwidthPackageId": string;
}
