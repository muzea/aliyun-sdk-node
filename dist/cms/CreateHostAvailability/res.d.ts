export interface CreateHostAvailabilityResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `ACBDBB40-DFB6-4F4C-8957-51FFB233969C`
     */
    RequestId: string;
    /**
     * 可用性监控任务ID。
     * @example `12345`
     */
    TaskId: number;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
