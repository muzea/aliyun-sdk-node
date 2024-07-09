export interface AttachDdosToAcceleratorRequest {
    /**
     * 要绑定DDoS高防实例的全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    "AcceleratorId": string;
    /**
     * 要绑定到全球加速实例的DDoS高防实例ID。
     * @example `ddoscoo-cn-zz11vq7j****`
     */
    "DdosId": string;
    /**
     * DDoS高防实例所在的地域，取值：
     * - **cn-hangzhou**：中国内地。
     * - **ap-southeast-1**：非中国内地。
     * @example `cn-hangzhou`
     */
    "DdosRegionId": string;
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
