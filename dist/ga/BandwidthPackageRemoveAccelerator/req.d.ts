export interface BandwidthPackageRemoveAcceleratorRequest {
    /**
     * 全球加速实例所在的地域，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 与全球加速实例解绑的带宽包的ID。
     * @example `gbwp-bp1sgzldyj6b4q7cx****`
     */
    "BandwidthPackageId": string;
    /**
     * 与带宽包解绑的全球加速实例的ID。
     * @example `ga-bp1qe94o52ot4pkfn****`
     */
    "AcceleratorId": string;
}
