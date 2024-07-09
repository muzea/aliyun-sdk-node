export interface ModifyAnycastEipAddressSpecRequest {
    /**
     * Anycast EIP实例的带宽峰值。单位：Mbps。
     * 取值范围：**200**~**1000**。
     * @example `200`
     */
    "Bandwidth": string;
    /**
     * Anycast EIP实例ID。
     * @example `aeip-bp1ix34fralt4ykf3****`
     */
    "AnycastId": string;
}
