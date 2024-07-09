export interface DescribeInstanceTDEStatusResponse {
    /**
     * TDE加密功能是否开启，返回值：
     * * **Enabled**：开启。
     * * **Disabled**：关闭。
     * @example `Enabled`
     */
    TDEStatus: string;
    /**
     * 请求ID。
     * @example `5D622714-AEDD-4609-9167-F5DDD3D1****`
     */
    RequestId: string;
}
