export interface DeleteMonitorGroupInstancesResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `5351B0F2-26A9-4BC9-87FF-1B74034D12C3`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：表示成功。
     * - false：表示失败。
     * @example `true`
     */
    Success: boolean;
}
