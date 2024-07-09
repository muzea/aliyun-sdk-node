export interface UpdatePrometheusRemoteWriteResponse {
    /**
     * Id of the request
     * @example `2A0CEDF1-06FE-44AC-8E21-21A5BE65****`
     */
    RequestId: string;
    /**
     * 返回成功修改的remoteWrite名称，或异常信息。
     * @example `rw1`
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
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
}
