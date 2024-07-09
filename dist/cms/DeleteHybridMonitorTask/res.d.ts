export interface DeleteHybridMonitorTaskResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `null`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `D6B8103F-7BAD-5FEB-945F-71D991AB8834`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
}
