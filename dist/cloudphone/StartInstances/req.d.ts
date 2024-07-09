export interface StartInstancesRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID列表。最多可以同时启动100台云手机。
     */
    "InstanceId": string[];
}
