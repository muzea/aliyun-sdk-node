export interface BandwidthPackageAddAcceleratorResponse {
    /**
     * 请求ID。
     * @example `B7770CB9-9745-4FE5-9EDA-D14B01A12A50`
     */
    RequestId: string;
    /**
     * 与带宽包绑定的全球加速实例的ID。
     */
    Accelerators: string[];
    /**
     * 与全球加速实例绑定的带宽包的ID。
     * @example `gbwp-bp1sgzldyj6b4q7cx****`
     */
    BandwidthPackageId: string;
}
