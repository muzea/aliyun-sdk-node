export interface AddPrometheusRemoteWriteResponse {
    /**
     * 请求ID。
     * @example `4C518054-852F-4023-ABC1-4AF95FF7****`
     */
    RequestId: string;
    /**
     * 返回成功增加的remoteWrite名称，或异常信息。
     * @example `1`
     */
    Data: string;
    /**
     * 操作是否成功：
     * - `true`：操作成功
     * - `false`：操作失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
}
