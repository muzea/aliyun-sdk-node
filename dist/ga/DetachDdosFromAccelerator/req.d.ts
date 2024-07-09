export interface DetachDdosFromAcceleratorRequest {
    /**
     * 全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    "AcceleratorId": string;
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
