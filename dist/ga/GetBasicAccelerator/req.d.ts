export interface GetBasicAcceleratorRequest {
    /**
     * 基础型全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要查询的基础型全球加速实例ID。
     * @example `ga-bp17frjjh0udz4qz****`
     */
    "AcceleratorId": string;
}
