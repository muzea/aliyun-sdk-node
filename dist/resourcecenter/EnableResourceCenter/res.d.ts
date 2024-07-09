export interface EnableResourceCenterResponse {
    /**
     * 服务开通状态。取值：
     * - Pending：开启中。
     * - Enabled：已开启。
     * @example `Pending`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `45357BEF-AB50-5E4D-B05D-5A882A4BE924`
     */
    RequestId: string;
}
