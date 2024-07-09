export interface PutCustomMetricResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The request has failed due to a temporary failure of the server.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `05B36C2C-5F6E-48D5-8B41-CE36DD7EE8E0`
     */
    RequestId: string;
}
