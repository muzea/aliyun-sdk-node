export interface CreateGlobalAccelerationInstanceResponse {
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
    /**
     * 全球加速实例的ID。
     * @example `ga-bp1fi6sq7npnicmjj****`
     */
    GlobalAccelerationInstanceId: string;
    /**
     * 全球加速实例的公网IP地址。
     * 如果**BandwidthType**取值为**Sharing**，则不返回该参数。
     * @example `12.xx.xx.78`
     */
    IpAddress: string;
}
