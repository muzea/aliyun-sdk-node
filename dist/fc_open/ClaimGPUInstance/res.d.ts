export interface ClaimGPUInstanceResponse {
    /**
     * 公网IP地址。
     * @example `0.0.0.0`
     */
    publicIp: string;
    /**
     * 实例ID。
     * @example `i-xxx`
     */
    instanceId: string;
    /**
     * 实例创建时间。
     * @example `2022-11-11 07:31:04.899465017 +0000 UTC m=+37.671563424`
     */
    createdTime: string;
}
