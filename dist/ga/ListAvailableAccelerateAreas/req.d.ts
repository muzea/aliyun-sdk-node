export interface ListAvailableAccelerateAreasRequest {
    /**
     * 全球加速所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 全球加速实例ID。
     * @example `ga-bp1yeeq8yfoyszmqy****`
     */
    "AcceleratorId"?: string;
}
