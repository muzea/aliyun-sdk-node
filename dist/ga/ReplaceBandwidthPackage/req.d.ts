export interface ReplaceBandwidthPackageRequest {
    /**
     * 全球加速实例所在的地域，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要替换的新的带宽包ID。指定带宽包时，请注意：
     * - 仅支持指定未绑定任何全球加速实例的带宽包。
     * - 如果要替换的带宽包为基础带宽包，请确保要替换的新的基础带宽包的带宽必须大于或等于加速区域中已分配的带宽总额。
     * @example `gbwp-bp176neb61yhcymow****`
     */
    "BandwidthPackageId": string;
    /**
     * 要被替换的旧的带宽包ID。
     * @example `gbwp-o978hgeb61yhcymow****`
     */
    "TargetBandwidthPackageId": string;
    /**
     * 待替换带宽包的全球加速实例ID。
     * @example `ga-bp17frjjh0udz4qz****`
     */
    "AcceleratorId"?: string;
}
