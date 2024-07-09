export interface CreateBasicAccelerateIpResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 基础型全球加速实例ID。
     * @example `ga-bp17frjjh0udz4qz****`
     */
    AcceleratorId: string;
    /**
     * 基础型全球加速实例的加速地域实例ID。
     * @example `ips-bp11r5jb8ogp122xl****`
     */
    IpSetId: string;
    /**
     * 基础型全球加速实例的加速IP实例ID。
     * @example `gaip-bp1****`
     */
    AccelerateIpId: string;
    /**
     * 基础型全球加速实例的加速IP。
     * @example `116.132.XX.XX`
     */
    AccelerateIpAddress: string;
    /**
     * 加速IP的状态。
     * > 该参数当前无实际意义，仅返回为空。
     * @example `null`
     */
    State: string;
}
